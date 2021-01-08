import { postUserLogout } from "../../../api"

const logout = async (token, removeCookie) => {
  try {
    await postUserLogout(token)
    removeCookie("auth")
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}

export default logout
