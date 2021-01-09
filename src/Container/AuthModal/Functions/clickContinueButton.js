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
