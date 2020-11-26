import ModalOverlay from "./ModalOverlay"
import Login from "./Login"
import Signup from "./Signup"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const AuthModal = ({ ModalType, hideModal }) => {
  return (
    <div>
      <ModalOverlay />
      {ModalType === ModalTypeConstants.LOGIN && <Login />}
      {ModalType === ModalTypeConstants.SIGN_UP && <Signup />}
      <button onClick={hideModal}>X</button>
    </div>
  )
}

export default AuthModal
