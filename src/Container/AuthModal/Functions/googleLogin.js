import { getAccountsGoogleLogin } from "../../../api"

const googleLogin = async () => {
  try {
    const response = await getAccountsGoogleLogin()
    // const queryString = response.data.url.split("&")
    // const redirect_uri = "https://wadium.shop/callback/google/"
    // const url = [
    //   queryString[0],
    //   "redirect_uri=" + encodeURIComponent(redirect_uri),
    //   ...queryString.slice(2),
    // ].join("&")
    window.location.href = response.data.url
  } catch (error) {
    console.log(error)
  }
}

export default googleLogin
