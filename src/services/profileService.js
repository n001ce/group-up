import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles/"

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function getAllProfiles() {
  return fetch(`${BASE_URL}`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function friend(id) {
  return fetch(
    `${BASE_URL}/friend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function unfriend(id) {
  return fetch(
    `${BASE_URL}/unfriend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function update(profile) {
  return fetch(
    `${BASE_URL}/update/${profile._id}`,
    {
      method: 'PUT',
      headers: { Authorization: "Bearer " + tokenService.getToken(), 
      'content-type': 'application/json'},
      body: JSON.stringify(profile)
    },
    { mode: "cors" }
    ).then((res) => res.json())
}