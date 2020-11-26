import ModalTemplete from "./ModalTemplete"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButton from "./ModalButton"

const Login = ({ hideModal }) => {
  return (
    <ModalTemplete hideModal={hideModal}>
      <ModalBigWriting>Welcome back.</ModalBigWriting>
      <ModalButton />
      <ModalButton />
      <ModalButton />
      <ModalButton />
      <ModalButton />
      <ModalMediumWriting>No account? Create one</ModalMediumWriting>
      <ModalSmallWriting>
        Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
        that Medium’s Privacy Policy applies to you.
      </ModalSmallWriting>
    </ModalTemplete>
  )
}

export default Login
