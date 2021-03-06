import { postUser } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const signUpCheck = async (
  token,
  history,
  setEmail,
  setTokenStatus,
  setUsername,
  setAccessToken
) => {
  // POST /user/
  try {
    const response = await postUser({
      auth_type: "EMAIL",
      req_type: "CHECK",
      access_token: token,
    })
    setEmail(response.data.email)
    setTokenStatus(TokenStatus.VALID)
    setUsername(response.data.username)
    setAccessToken(response.data.access_token)
  } catch (error) {
    console.log(error)
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
