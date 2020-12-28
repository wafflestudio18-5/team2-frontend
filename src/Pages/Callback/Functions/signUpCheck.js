import { postUser } from "../../../api"

const signUpCheck = async (token, setEmail) => {
  try {
    const response = await postUser({
      auth_type: "EMAIL",
      req_type: "CHECK",
      access_token: token,
    })
    setEmail(response.data.email)
  } catch (error) {
    console.log(error)
  }
}

export default signUpCheck
