import AuthModal from "../../Components/AuthModal"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import { useState } from "react"

const AuthModalContainer = ({ hideModal, modalVisible, ModalType }) => {
  // 어떤 Modal을 띄울지 결정
  const [modalType, setModalType] = useState(ModalType)

  const changeModal = (changeToEmail = false) => {
    if (modalType === ModalTypeConstants.EMAIL_LOG_IN) {
      setModalType(ModalTypeConstants.LOG_IN)
      return
    }
    if (modalType === ModalTypeConstants.EMAIL_SIGN_UP) {
      setModalType(ModalTypeConstants.SIGN_UP)
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
    />
  )
}

export default AuthModalContainer
