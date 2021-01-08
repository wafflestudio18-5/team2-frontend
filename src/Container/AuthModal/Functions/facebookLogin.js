import { getAccountsFacebookLogin } from "../../../api"

const facebookLogin = async () => {
  try {
    const response = await getAccountsFacebookLogin()
    window.location.href = response.data.url
  } catch (error) {
    console.log(error)
  }
}

export default facebookLogin
