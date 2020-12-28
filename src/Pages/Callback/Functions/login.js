import { postUserLogin } from "../../../api"

const login = async (token, history, setCookie) => {
  try {
    const authToken = await postUserLogin({
      auth_type: "EMAIL",
      req_type: "LOGIN",
      access_token: token,
    }).data.token
    setCookie("auth", authToken, { path: "/" })
    history.push("/main")
  } catch (error) {
    console.log(error)
  }
}

export default login
