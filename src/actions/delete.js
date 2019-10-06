import fetch from 'cross-fetch'

// Credit to @ramzallan in tonic

// eslint-disable-next-line no-unused-vars
function DELETE (accessToken, route, body) {
  return fetch(process.env.REACT_APP_API_ROUTE + route, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
