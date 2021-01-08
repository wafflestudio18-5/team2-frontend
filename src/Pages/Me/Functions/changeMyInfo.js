import { putUserMe } from "../../../api"

const changeMyInfo = async (token, body, setUser) => {
  try {
    const response = await putUserMe(token, body)
    setUser(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default changeMyInfo
