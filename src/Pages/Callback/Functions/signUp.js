import { postUser } from "../../../api"
import TokenStatus from "../../../Constants/TokenStatus"

const signUp = async (
  access_token,
  email,
  input,
  username,
  setCookie,
  setTokenStatus,
  history
) => {
  // POST /user/
  try {
    const response = await postUser({
      auth_type: "EMAIL",
      req_type: "CREATE",
      access_token,
      email,
      name: input,
      username,
    })
    console.log(response)
    const authToken = response.data.token

    setCookie("auth", authToken, { path: "/", sameSite: "Lax" })
    history.push("/main")
  } catch (error) {
    console.log(error)
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

export default signUp
