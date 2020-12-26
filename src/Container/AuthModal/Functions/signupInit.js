import { postUser } from "../../../api"

const signupInit = (email) => {
  postUser({
    auth_type: "EMAIL",
    req_type: "INIT",
    email,
  }).then((response) => {
    console.log(response)
  })
}

export default signupInit
