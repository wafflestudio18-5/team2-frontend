import changeMyInfo from "./changeMyInfo"
import getCurrentUser from "../../Main/Functions/getCurrentUser"
import getUserSpec from "./getUserSpec"

const save = (token, userSpec, setUserSpec, setUser, setErrorMessage) => {
  changeMyInfo(token, userSpec, setUserSpec, setErrorMessage)
  getCurrentUser(token, setUser)
  getUserSpec(token, setUserSpec)
}

export default save
