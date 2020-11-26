import ModalOverlay from "./ModalOverlay"
import Login from "./Login"
import Signup from "./Signup"

const AuthModal = ({ ModalType, hideModal }) => {
  return (
    <div>
      <ModalOverlay />
      {ModalType === "Login" && <Login />}
      {ModalType === "Signup" && <Signup />}
      <button onClick={hideModal}>X</button>
    </div>
  )
}

export default AuthModal
