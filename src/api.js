import axios from "axios"

// set base url
const baseUrl = "http://localhost:8000"
axios.defaults.baseURL = baseUrl

// user api
export const getUserMeAbout = async (token) => {
  // GET /user/me/about
  const config = { Authorization: "Auth " + token }
  const response = await axios.get("user/me/about", config)
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
  const config = { Authorization: "Auth" + token }
  const response = await axios.post("user/logout/", {}, config)
  return response
}
