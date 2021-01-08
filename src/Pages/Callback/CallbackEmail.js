import CallbackEmail from "../../Components/CallbackEmail"
import signUpCheck from "./Functions/signUpCheck"
import login from "./Functions/login"
import signUp from "./Functions/signUp"
import runAnimationOnInvalidEmail from "../../Container/AuthModal/Functions/runAnimationOnInvalidEmail"
import { useLocation, useHistory } from "react-router-dom"
import queryString from "query-string"
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import TokenStatus from "../../Constants/TokenStatus"

const CallbackEmailPage = () => {
  const queryStrings = queryString.parse(useLocation().search)
  const history = useHistory()
  const setCookie = useCookies(["auth"])[1]

  const [email, setEmail] = useState("")
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.NOT_EXIST)
  const [input, setInput] = useState("")
  const [alertInvalidInput, setAlertInvalidInput] = useState(false)

  const [access_token, setAccessToken] = useState("")
  const [username, setUsername] = useState("")

  useEffect(() => {
    switch (queryStrings.operation) {
      case "register":
        signUpCheck(
          queryStrings.token,
          history,
          setEmail,
          setTokenStatus,
          setUsername,
          setAccessToken
        )
        break

      case "login":
        login(queryStrings.token, history, setCookie, setTokenStatus)
        break

      default:
        history.push("/error")
        break
    }
  }, [queryStrings.operation, queryStrings.token, history, setCookie])

  const onClickCreateButton = () => {
    if (input === "") {
      setAlertInvalidInput(true)
      runAnimationOnInvalidEmail()
      return
    }
    signUp(
      access_token,
      email,
      input,
      username,
      setCookie,
      setTokenStatus,
      history
    )
  }

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  return (
    <CallbackEmail
      email={email}
      tokenStatus={tokenStatus}
      onClickCreateButton={onClickCreateButton}
      onChangeInput={onChangeInput}
      alertInvalidInput={alertInvalidInput}
    />
  )
}

export default CallbackEmailPage
