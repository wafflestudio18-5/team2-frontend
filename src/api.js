import axios from "axios"

const baseUrl = "https://api.wadium.shop/"
axios.defaults.baseURL = baseUrl

export const postUser = async (body) => {
  const response = await axios.post("user/", body)
  return response
}

export const postUserLogin = async (body) => {
  const response = await axios.post("user/login/", body)
  return response
}
