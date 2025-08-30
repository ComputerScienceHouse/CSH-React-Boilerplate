import {useEffect, useState} from "react";
import {useConstCallback} from "powerhooks";
import {Helmet} from "react-helmet-async";

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => darkQuery().matches);
  useEffect(() => {
    const query = darkQuery();
    const onMediaChange = (event: {matches: boolean}) => {
      setDarkMode(event.matches);
    };
    onMediaChange(query);
    return () => {
      query.removeEventListener("change", onMediaChange);
    };
  }, []);

  const onThemeToggle = useConstCallback(() => {
    setDarkMode((darkMode) => !darkMode);
  });

  return (
    <>
      <Helmet>
        <body className={darkMode ? "dark-theme" : undefined} />
      </Helmet>
      <button
        style={{width: "32px", height: "32px"}}
        onClick={onThemeToggle}
        className="icon-button"
        role="toggle"
      >
        <span className="material-icons-outlined" style={{fontSize: "32px"}}>
          {darkMode ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </>
  );
}
