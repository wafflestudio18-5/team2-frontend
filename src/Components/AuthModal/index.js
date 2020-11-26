import ModalOverlay from "./ModalOverlay"
import Login from "./Login"
import Signup from "./Signup"

const AuthModal = ({ ModalType }) => {
  return (
    <div>
      <ModalOverlay />
      {ModalType === "Login" && <Login />}
      {ModalType === "Signup" && <Signup />}
    </div>
  )
}

export default AuthModal
