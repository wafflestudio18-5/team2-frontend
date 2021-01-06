import { getAccountsGoogleLogin } from "../../../api"

const googleLogin = async (history) => {
  try {
    // const response = await getAccountsGoogleLogin()
    // const queryString = response.data.url.split("&")
    // const redirect_uri = "https://www.wadium.shop/callback/google/"
    // const url = [
    //   queryString[0],
    //   "redirect_uri=" + encodeURIComponent(redirect_uri),
    //   ...queryString.slice(2),
    // ].join("&")
    // history.push(url)
    history.push("https://naver.com/")
  } catch (error) {
    console.log(error)
  }
}

export default googleLogin
