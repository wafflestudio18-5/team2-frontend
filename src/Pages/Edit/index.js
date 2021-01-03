import EditLoginPage from "./EditLogin"
import AuthModalContainer from "../../Container/AuthModal"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import { useCookies } from "react-cookie"

const EditPage = () => {
  const token = useCookies(["auth"])[0].auth
  if (token === undefined) {
    return <AuthModalContainer modalType={ModalTypeConstants.SIGN_UP} />
  } else {
    return <EditLoginPage />
  }
}

export default EditPage
