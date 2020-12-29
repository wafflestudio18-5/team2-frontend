import { postUser } from "../../../api"
import ModalTypeConstants from "../../../Constants/ModalTypeConstants"

const signupInit = async (email, setModalType) => {
  try {
    await postUser({
      auth_type: "EMAIL",
      req_type: "INIT",
      email,
    })
    setModalType(ModalTypeConstants.EMAIL_SENT)
  } catch (error) {
    console.log(error)
  }
}

export default signupInit
