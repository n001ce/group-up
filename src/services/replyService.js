import * as tokenService from "./tokenService"
const BASE_URL = "/api/reviews/"



export function addReview(review) {
  return fetch(
    `${BASE_URL}`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(review)
    },
    { mode: "cors" })
  .then((res) => res.json())
}


export function deleteReview(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    },
    { mode: "cors" })
  .then((res) => res.json())
}

export function showStreamReviews(api_id) {
  return fetch(
    `${BASE_URL}${api_id}`,
    {
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    },
    { mode: "cors" })
  .then((res) => res.json())
}