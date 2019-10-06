import fetch from 'cross-fetch'

// Credit to @ramzallan in tonic

// eslint-disable-next-line no-unused-vars
function PUT (accessToken, route, body) {
  return fetch(process.env.REACT_APP_API_ROUTE + route, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
