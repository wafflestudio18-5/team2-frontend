import axios from "axios"

// set base url
const baseUrl = "http://api.wadium.shop/"
axios.defaults.baseURL = baseUrl

// user api
export const getUserMeAbout = async (token) => {
  // GET /user/me/about
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.get("user/me/about/", config)
  return response
}

export const postUser = async (body) => {
  // POST /user/
  const response = await axios.post("user/", body)
  return response
}

export const postUserLogin = async (body) => {
  // POST /user/login/
  const response = await axios.post("user/login/", body)
  return response
}

export const postUserLogout = async (token) => {
  // POST /user/logout/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.post("user/logout/", {}, config)
  return response
}

// story api
export const postStory = async (token, body) => {
  // POST /story/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.post("story/", body, config)
  return response
}

export const postStoryStoryidPublish = async (token, id) => {
  // POST /story/{story_id}/publish/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.post("story/" + id + "/publish/", {}, config)
  return response
}

export const putStoryStoryid = async (token, body, id) => {
  // PUT /story/{story_id}/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.put("story/" + id + "/", body, config)
  return response
}
