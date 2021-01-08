import AuthModal from "../../Components/AuthModal"
import clickContinueButton from "./Functions/clickContinueButton"
import changeModal from "./Functions/changeModal"
import googleLogin from "./Functions/googleLogin"
import facebookLogin from "./Functions/facebookLogin"
import { useState } from "react"

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

  return (
    <AuthModal
      ModalType={modalType}
      hideModal={hideModal}
      modalVisible={modalVisible}
      changeModal={(changeToEmail = false) => {
        changeModal(modalType, setModalType, setAlertWrongEmail, changeToEmail)
      }}
      updateEmailOnChange={updateEmailOnChange}
      clickContinueButton={(type) => {
        clickContinueButton(
          type,
          email,
          setAlertWrongEmail,
          setModalType,
          setEmail
        )
      }}
      alertWrongEmail={alertWrongEmail}
      email={email}
      googleLogin={googleLogin}
      facebookLogin={facebookLogin}
    />
  )
}

export default AuthModalContainer
