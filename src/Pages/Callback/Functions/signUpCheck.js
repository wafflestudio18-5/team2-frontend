import { postUser } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const signUpCheck = async (token, history, setEmail, setTokenStatus) => {
  try {
    const response = await postUser({
      auth_type: "EMAIL",
      req_type: "CHECK",
      access_token: token,
    })
    setEmail(response.data.email)
    setTokenStatus(TokenStatus.VALID)
  } catch (error) {
    switch (error.response.status) {
      case 401:
        setTokenStatus(TokenStatus.INVALID)
        break

      case 404:
        break

      default:
        break
    }
  }
}

export default signUpCheck
