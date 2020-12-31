import MainNotLoginPage from "./MainNotLogin"
import MainLoginPage from "./MainLogin"
import { useCookies } from "react-cookie"

const MainPage = () => {
  const token = useCookies(["auth"])[0].auth
  if (token === undefined) {
    return <MainNotLoginPage />
  } else {
    return <MainLoginPage token={token} />
  }
}

export default MainPage
