import { postUserLogin } from "../../../api"
import ModalTypeConstants from "../../../Constants/ModalTypeConstants"

const loginInit = async (email, setModalType, setEmail) => {
  try {
    console.log(
      await postUserLogin({
        auth_type: "EMAIL",
        req_type: "INIT",
        email,
      })
    )
    setModalType(ModalTypeConstants.EMAIL_SENT)
  } catch (error) {
    setEmail("")
    setModalType(ModalTypeConstants.EMAIL_NOT_EXISTS)
  }
}

export default loginInit
