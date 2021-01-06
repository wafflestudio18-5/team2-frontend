import { getAccountsGoogleLoginCallback } from "../../../api"

const googleLogin = async (queryString, setCookie, history) => {
  try {
    const response = await getAccountsGoogleLoginCallback(queryString)
    const { token } = response.data
    await setCookie("auth", token, { path: "/", sameSite: "Lax" })
  } catch (error) {
    console.log(error)
  } finally {
    history.push("/")
  }
}

export default googleLogin
