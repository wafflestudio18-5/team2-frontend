import AuthModal from "../../Components/AuthModal"
import clickContinueButton from "./Functions/clickContinueButton"
import changeModal from "./Functions/changeModal"
import googleLogin from "./Functions/googleLogin"
import facebookLogin from "./Functions/facebookLogin"
import { useState } from "react"

const AuthModalContainer = ({ hideModal, modalVisible, ModalType }) => {
  const [modalType, setModalType] = useState(ModalType)
  const [email, setEmail] = useState("")
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
