import { postUser } from "../../../api"

const signUp = async (
  access_token,
  email,
  name,
  username,
  setCookie,
  history
) => {
  // POST /user/
  try {
    const authToken = await postUser({
      auth_type: "EMAIL",
      req_type: "CREATE",
      access_token,
      email,
      name,
      username,
    }).data.token

    setCookie("auth", authToken, { path: "/" })
    history.push("/main")
    // 요청 성공 시 authentication token 쿠키에 저장, main page로 redirect
  } catch (error) {
    switch (error.response.status) {
    }
  }
}

export default signUp
