import checkEmailValidation from "./checkEmailValidation"
import runAnimationOnInvalidEmail from "./runAnimationOnInvalidEmail"
import loginInit from "./loginInit"
import signupInit from "./signupInit"

const clickContinueButton = (
  type,
  email,
  setAlertWrongEmail,
  setModalType,
  setEmail
) => {
  // email 로그인, 회원가입에서 continue 버튼 클릭 시  호출되는 함수
  // parameter로 type을 입력받아 로그인인지 회원가입인지 결정.
  if (!checkEmailValidation(email)) {
    setAlertWrongEmail(true)
    runAnimationOnInvalidEmail()
    return
  }

  switch (type) {
    case "log in":
      loginInit(email, setModalType, setEmail)
      break

    case "sign up":
      signupInit(email, setModalType)
      break

    default:
      console.log("invalid type")
  }
}

export default clickContinueButton
