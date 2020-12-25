import AuthModal from "../../Components/AuthModal"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import { postUser, postUserLogin } from "../../api"
import { useCookies } from "react-cookies"
import { useState } from "react"
import checkEmailValidation from "./Functions/checkEmailValidation"

const AuthModalContainer = ({ hideModal, modalVisible, ModalType }) => {
  // 어떤 Modal을 띄울지 결정
  const [modalType, setModalType] = useState(ModalType)
  // email 로그인, 회원가입에서 input field에 입력된 값을 저장하는 state
  const [email, setEmail] = useState("")
  // 입력한 email이 invalid할 경우 true
  const [alertWrongEmail, setAlertWrongEmail] = useState(false)

  const updateEmailOnChange = (event) => {
    setEmail(event.target.value)
  }

  const clickContinueButton = (type) => {
    // email 로그인, 회원가입에서 continue 버튼 클릭 시  호출되는 함수
    // parameter로 type을 입력받아 로그인인지 회원가입인지 결정.

    if (!checkEmailValidation(email)) {
      setAlertWrongEmail(true)
      return
    }

    switch (type) {
      case "log in":
        postUserLogin({
          auth_type: "EMAIL",
          req_type: "INIT",
          email,
        }).then((response) => {
          console.log(response)
        })
        break

      case "sign up":
        postUser({
          auth_type: "EMAIL",
          req_type: "INIT",
          email,
        }).then((response) => {
          console.log(response)
        })
        break

      default:
        console.log("invalid type")
    }
  }

  const changeModal = (changeToEmail = false) => {
    // modal의 종류를 바꾸는 함수
    if (modalType === ModalTypeConstants.EMAIL_LOG_IN) {
      setModalType(ModalTypeConstants.LOG_IN)
      setAlertWrongEmail(false)
      return
    }
    if (modalType === ModalTypeConstants.EMAIL_SIGN_UP) {
      setModalType(ModalTypeConstants.SIGN_UP)
      setAlertWrongEmail(false)
      return
    }
    if (modalType === ModalTypeConstants.LOG_IN) {
      if (changeToEmail) {
        setModalType(ModalTypeConstants.EMAIL_LOG_IN)
        return
      }
      setModalType(ModalTypeConstants.SIGN_UP)
    } else {
      if (changeToEmail) {
        setModalType(ModalTypeConstants.EMAIL_SIGN_UP)
        return
      }
      setModalType(ModalTypeConstants.LOG_IN)
    }
  }

  return (
    <AuthModal
      ModalType={modalType}
      hideModal={hideModal}
      modalVisible={modalVisible}
      changeModal={changeModal}
      updateEmailOnChange={updateEmailOnChange}
      clickContinueButton={clickContinueButton}
      alertWrongEmail={alertWrongEmail}
    />
  )
}

export default AuthModalContainer
