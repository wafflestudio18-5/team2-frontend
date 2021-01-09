import { getAccountsGoogleLoginCallback } from "../../../api"

const googleLogin = async (queryString, setCookie, history) => {
  try {
    const response = await getAccountsGoogleLoginCallback(queryString)
    const { token } = response.data
    await setCookie("auth", token, { path: "/", sameSite: "Lax" })
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}

export default googleLogin
