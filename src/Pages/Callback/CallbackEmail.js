import CallbackEmail from "../../Components/CallbackEmail"
import signUpCheck from "./Functions/signUpCheck"
import login from "./Functions/login"
import { useLocation, useHistory } from "react-router-dom"
import queryString from "query-string"
import { useState } from "react"
import { useCookies } from "react-cookie"
import TokenStatus from "../../Constants/TokenStatus"

const CallbackEmailPage = () => {
  const [email, setEmail] = useState("")
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.NOT_EXIST)
  const queryStrings = queryString.parse(useLocation().search)
  const history = useHistory()
  const setCookie = useCookies(["auth"])[1]
  switch (queryStrings.operation) {
    case "register":
      signUpCheck(queryStrings.token, history, setEmail, setTokenStatus)
      break

    case "login":
      login(queryStrings.token, history, setCookie, setTokenStatus)
      break

    default:
      break
  }
  return <CallbackEmail email={email} tokenStatus={tokenStatus} />
}

export default CallbackEmailPage
