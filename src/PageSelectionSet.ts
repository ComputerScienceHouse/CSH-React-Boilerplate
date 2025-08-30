export type PageSelectionSet = string;

export type UserPageSelectionSet = {
  // User-entered text
  text: string;
  // Validated set
  validSet: PageSelectionSet;
};

export type PageRange = {
  start: number; // inclusive
  end: number; // inclusive
};

function parseRange(range: string): PageRange {
  const dashIndex = range.indexOf("-");
  let start, end;
  if (dashIndex == -1) {
    start = range;
    end = range;
  } else {
    start = range.substring(0, dashIndex);
    end = range.substring(dashIndex + 1);
  }
  start = start.trim();
  end = end.trim();

  const result = {
    start: parseInt(start),
    end: parseInt(end),
  };
  if (isNaN(result.start) || isNaN(result.end)) {
    throw new Error(`Invalid page range: ${range}`);
  }
  return result;
}

function serializeRange(range: PageRange): string {
  if (range.start == range.end) {
    return range.start.toString();
  } else {
    return `${range.start}-${range.end}`;
  }
}

export function setContainsPage(set: PageSelectionSet, page: number): boolean {
  if (!set.trim().length) {
    return true;
  }
  const ranges = set
    .split(",")
    .map((range) => range.trim())
    .map((range) => parseRange(range));
  return ranges.some((range) => page >= range.start && page <= range.end);
}

export function addPageToSet(
  set: PageSelectionSet,
  page: number,
): PageSelectionSet {
  if (setContainsPage(set, page)) {
    return set;
  }
  const rangeStrings = set.split(",");
  const ranges = rangeStrings
    .map((range) => range.trim())
    .map((range) => parseRange(range));
  let located = null;
  for (let i = 0; i < ranges.length; ++i) {
    if (ranges[i].start == page + 1) {
      --ranges[i].start;
      located = i;
      break;
    }
    if (ranges[i].end == page - 1) {
      ++ranges[i].end;
      located = i;
      break;
    }
  }
  if (located !== null) {
    rangeStrings[located] = serializeRange(ranges[located]);
    return rangeStrings.join(",");
  }

  if (set.trim().length) {
    return set + `, ${page}`;
  } else {
    return page.toString();
  }
}

export function removePageFromSet(
  set: PageSelectionSet,
  page: number,
  pageCount: number,
): PageSelectionSet {
  if (!setContainsPage(set, page)) {
    return set;
  }
  if (!set.length) {
    set = `1-${pageCount}`;
  }
  const rangeStrings = set.split(",");
  return rangeStrings
    .filter((rangeString) => rangeString.trim().length)
    .map((rangeString) => ({
      range: parseRange(rangeString.trim()),
      string: rangeString,
    }))
    .flatMap(({range, string}: {range: PageRange; string: string}) => {
      if (range.start == page && range.end == page) {
        return [];
      }
      if (range.start == page) {
        return serializeRange({start: page + 1, end: range.end});
      }
      if (range.end == page) {
        return serializeRange({start: range.start, end: page - 1});
      }
      if (page >= range.start && page <= range.end) {
        // Contains this page
        return [
          serializeRange({start: range.start, end: page - 1}),
          serializeRange({start: page + 1, end: range.end}),
        ];
      }
      return [string];
    })
    .join(",");
}
