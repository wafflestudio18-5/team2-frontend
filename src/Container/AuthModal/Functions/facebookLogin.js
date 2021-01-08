import { getAccountFacebookLogin } from "../../../api"

const facebookLogin = async () => {
  try {
    const response = await getAccountFacebookLogin()
    window.location.href = response.data.url
  } catch (error) {
    console.log(error)
  }
}

export default facebookLogin
