import { putUserMe } from "../../../api"

const changeMyInfo = async (token, body) => {
  try {
    return await putUserMe(token, body)
  } catch (error) {
    console.log(error)
  }
}

export default changeMyInfo
