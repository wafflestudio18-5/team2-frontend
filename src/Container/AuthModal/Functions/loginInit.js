import { postUserLogin } from "../../../api"

const loginInit = (email) => {
  postUserLogin({
    auth_type: "EMAIL",
    req_type: "INIT",
    email,
  }).then((response) => {
    console.log(response)
  })
}

export default loginInit
