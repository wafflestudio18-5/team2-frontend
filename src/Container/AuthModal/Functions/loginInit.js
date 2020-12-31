import { postUserLogin } from "../../../api"
import ModalTypeConstants from "../../../Constants/ModalTypeConstants"

const loginInit = async (email, setModalType, setEmail) => {
  try {
    await postUserLogin({
      auth_type: "EMAIL",
      req_type: "INIT",
      email,
    })
    setModalType(ModalTypeConstants.EMAIL_SENT_LOG_IN)
  } catch (error) {
    setEmail("")
    document.getElementById("EmailInputField").value = ""
    setModalType(ModalTypeConstants.EMAIL_NOT_EXISTS)
  }
}

export default loginInit
