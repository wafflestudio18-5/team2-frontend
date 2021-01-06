import { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import Loading from "../../Components/Loading"
import googleLogin from "./Functions/googleLogin"

const CallbackGooglePage = () => {
  const queryString = useLocation().search
  const setCookie = useCookies(["auth"])[1]
  const history = useHistory()

  useEffect(() => {
    googleLogin(queryString, setCookie, history)
  }, [history, queryString, setCookie])

  return <Loading />
}

export default CallbackGooglePage
