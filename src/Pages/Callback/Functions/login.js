import { postUserLogin } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const login = async (token, history, setCookie, setTokenStatus) => {
  // POST /user/login/
  try {
    const response = await postUserLogin({
      auth_type: "EMAIL",
      req_type: "LOGIN",
      access_token: token,
    })
    const authToken = response.data.token
    setCookie("auth", authToken, { path: "/", sameSite: "Lax" })
    history.push("/main")
    // 요청 성공 시 authentication token 쿠키에 저장, main page로 redirect
  } catch (error) {
    console.log(error)
    switch (error.response.status) {
      case 404:
        // error code 404
        break

      case 401:
        //error code 401
        setTokenStatus(TokenStatus.INVALID)
        break

      default:
        break
    }
  }
}

export default login
