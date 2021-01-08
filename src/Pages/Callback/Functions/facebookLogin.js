import { getAccountsFacebookLoginCallback } from "../../../api"

const facebookLogin = async (queryString, setCookie, history) => {
  try {
    const response = await getAccountsFacebookLoginCallback(queryString)
    const { token } = response.data
    await setCookie("auth", token, { path: "/", sameSite: "Lax" })
    history.push("/")
  } catch (error) {
    console.log(error)
    console.log(error.response.data)
  }
}

export default facebookLogin
