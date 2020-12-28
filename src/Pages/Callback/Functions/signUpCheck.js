import { postUser } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const signUpCheck = async (token, history, setEmail, setTokenStatus) => {
  // POST /user/
  try {
    const response = await postUser({
      auth_type: "EMAIL",
      req_type: "CHECK",
      access_token: token,
    })
    // 성공 시 email과 token state에 저장
    setEmail(response.data.email)
    setTokenStatus(TokenStatus.VALID)
  } catch (error) {
    switch (error.response.status) {
      case 401:
        // error code 401
        setTokenStatus(TokenStatus.INVALID)
        break

      case 404:
        // error code 404
        break

      default:
        break
    }
  }
}

export default signUpCheck
