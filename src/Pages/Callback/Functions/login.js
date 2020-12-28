import { postUserLogin } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const login = async (token, history, setCookie, setTokenStatus) => {
  try {
    const authToken = await postUserLogin({
      auth_type: "EMAIL",
      req_type: "LOGIN",
      access_token: token,
    }).data.token
    setCookie("auth", authToken, { path: "/" })
    history.push("/main")
  } catch (error) {
    switch (error.response.status) {
      case 404:
        break

      case 401:
        setTokenStatus(TokenStatus.INVALID)
        break

      default:
        break
    }
  }
}

export default login
