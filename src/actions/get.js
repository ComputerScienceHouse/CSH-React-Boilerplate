import fetch from 'cross-fetch'

// Credit to @ramzallan in tonic

// eslint-disable-next-line no-unused-vars
export function GET (accessToken, route) {
  return fetch(process.env.REACT_APP_API_ROUTE + route, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })
}
