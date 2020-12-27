import { postUser } from "../../../api"

const signupInit = async (email) => {
  const response = await postUser({
    auth_type: "EMAIL",
    req_type: "INIT",
    email,
  })
  console.log(response)
}

export default signupInit
