import { getAccountsGoogleLogin } from "../../../api"

const googleLogin = async () => {
  try {
    const response = await getAccountsGoogleLogin()
    window.location.href = response.data.url
  } catch (error) {
    console.log(error)
  }
}

export default googleLogin
