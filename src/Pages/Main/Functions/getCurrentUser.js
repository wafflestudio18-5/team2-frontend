import { getUserMeAbout } from "../../../api"

const getCurrentUser = async (token, setUser) => {
  try {
    const response = await getUserMeAbout(token)
    setUser(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default getCurrentUser
