import ModalOverlay from "./ModalOverlay"
import Login from "./Login"
import Signup from "./Signup"

const AuthModal = ({ type }) => {
  return (
    <div>
      <ModalOverlay />
      {type === "Login" && <Login />}
      {type === "Signup" && <Signup />}
    </div>
  )
}

export default AuthModal
