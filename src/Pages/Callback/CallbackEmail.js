import CallbackEmail from "../../Components/CallbackEmail"
import signUpCheck from "./Functions/signUpCheck"
import login from "./Functions/login"
import { useLocation, useHistory } from "react-router-dom"
import queryString from "query-string"
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import TokenStatus from "../../Constants/TokenStatus"

const CallbackEmailPage = () => {
  const [email, setEmail] = useState("")
  // operation=register인 경우 email을 받아 페이지에 출력하기 위한 state
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.NOT_EXIST)
  // 토큰의 상태(유효한지 아닌지)
  const [input, setInput] = useState("")
  // input field의 값
  const queryStrings = queryString.parse(useLocation().search)
  const history = useHistory()
  const setCookie = useCookies(["auth"])[1]

  useEffect(() => {
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
  }, [queryStrings.operation, queryStrings.token, history, setCookie])

  return (
    <CallbackEmail
      email={email}
      tokenStatus={tokenStatus}
      token={queryStrings.token}
    />
  )
}

export default CallbackEmailPage
