import { postUser } from "../../../api"

const signUp = async (
  access_token,
  email,
  input,
  username,
  setCookie,
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

    setCookie("auth", authToken, { path: "/" })
    history.push("/main")
    // 요청 성공 시 authentication token 쿠키에 저장, main page로 redirect
  } catch (error) {
    switch (error.response.status) {
      case 404:
        // error code 404
        break

      case 401:
        //error code 401
        break

      default:
        break
    }
  }
}

export default signUp
