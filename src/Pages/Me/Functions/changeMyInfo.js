import { putUserMe } from "../../../api"

const changeMyInfo = async (token, body, setUser, setErrorMessage) => {
  try {
    const response = await putUserMe(token, body)
    setUser(response.data)
    setErrorMessage("Saved")
  } catch (error) {
    console.log(error)
    setErrorMessage(error.response.data)
  }
}

export default changeMyInfo
