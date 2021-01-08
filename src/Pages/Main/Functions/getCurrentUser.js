import { getUserMeAbout } from "../../../api"

const getCurrentUser = async (token, setUser) => {
  try {
    const response = await getUserMeAbout(token)
    await setUser(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default getCurrentUser
