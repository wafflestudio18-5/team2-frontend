import { getUserMe } from "../../../api"

const getUserSpec = async (token, setUserSpec) => {
  try {
    const response = await getUserMe(token)
    setUserSpec(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default getUserSpec
