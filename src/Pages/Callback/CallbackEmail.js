import CallbackEmail from "../../Components/CallbackEmail"
import signUpCheck from "./Functions/signUpCheck"
import login from "./Functions/login"
import { useLocation, useHistory } from "react-router-dom"
import queryString from "query-string"
import { useState } from "react"
import { useCookies } from "react-cookie"

const CallbackEmailPage = () => {
  const [email, setEmail] = useState("")
  const queryStrings = queryString.parse(useLocation().search)
  const history = useHistory()
  const setCookie = useCookies(["auth"])[1]
  switch (queryStrings.operation) {
    case "register":
      signUpCheck(queryString.token, setEmail)
      break

    case "login":
      login(queryString.token, history, setCookie)
      break

    default:
      break
  }
  return <CallbackEmail email={email} />
}

export default CallbackEmailPage
