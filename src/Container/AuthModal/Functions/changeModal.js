import ModalTypeConstants from "../../../Constants/ModalTypeConstants"

const changeModal = (
  modalType,
  setModalType,
  setAlertWrongEmail,
  changeToEmail
) => {
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

export default changeModal
