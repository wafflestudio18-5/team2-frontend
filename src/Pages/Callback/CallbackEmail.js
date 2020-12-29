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

  //general state
  const [email, setEmail] = useState("")
  // operation=register인 경우 email을 받아 페이지에 출력하기 위한 state
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.NOT_EXIST)
  // 토큰의 상태(유효한지 아닌지)
  const [input, setInput] = useState("")
  // input field의 값
  const [alertInvalidInput, setAlertInvalidInput] = useState(false)

  //operation=register인 경우 필요한 state
  const [access_token, setAccessToken] = useState("")
  // POST /user/ check요청을 보내 받은 토큰
  const [username, setUsername] = useState("")
  // POST /user/ check요청을 보내 받은 username

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
        break
    }
  }, [queryStrings.operation, queryStrings.token, history, setCookie])

  const onClickCreateButton = () => {
    // 마지막 POST /user/ 요청을 보내는 함수
    if (input === "") {
      setAlertInvalidInput(true)
      runAnimationOnInvalidEmail()
      return
    }
    signUp(access_token, email, input, username, setCookie, history)
  }

  const onChangeInput = (event) => {
    // 토큰의 유효 여부와 상관없이 input field의 값이 변경되면 state에 저장
    // 토큰이 유효하면 이 값(full name)으로 sign up 요청을 보내고,
    // 토큰이 유효하지 않으면 이 값(email)으로 메일을 보냄
    setInput(event.target.value)
  }

  return (
    <CallbackEmail
      email={email}
      tokenStatus={tokenStatus}
      token={queryStrings.token}
      onClickCreateButton={onClickCreateButton}
      onChangeInput={onChangeInput}
      alertInvalidInput={alertInvalidInput}
    />
  )
}

export default CallbackEmailPage
