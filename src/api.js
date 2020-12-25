import axios from "axios"

const baseUrl = "https://api.wadium.shop/"
axios.defaults.baseURL = baseUrl

export const postUser = async (body) => {
  await axios.post("user/", body).then((response) => {
    return response.data
  })
}

export const postUserLogin = async (body) => {
  await axios.post("user/login/", body).then((response) => {
    return response.data
  })
}
