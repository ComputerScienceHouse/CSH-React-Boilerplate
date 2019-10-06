import fetch from 'cross-fetch'

// Credit to @ramzallan in tonic

// eslint-disable-next-line no-unused-vars
function POST (accessToken, route, body) {
  return fetch(process.env.REACT_APP_API_ROUTE + route, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
