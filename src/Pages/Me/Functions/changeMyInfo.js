import { putUserMe } from "../../../api"

const changeMyInfo = async (token, body, setUser, setErrorMessage) => {
  try {
    const response = await putUserMe(token, body)
    setUser(response.data)
    document.getElementById("error").classList.add("run")
    setErrorMessage("Saved")
    setTimeout(() => {
      document.getElementById("error").classList.remove("run")
    }, 600)
  } catch (error) {
    console.log(error)
    setErrorMessage(error.response.data)
  }
}

export default changeMyInfo
