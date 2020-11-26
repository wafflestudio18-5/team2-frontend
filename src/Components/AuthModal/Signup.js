import ModalTemplete from "./ModalTemplete"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButtonWrapper from "./ModalButtonWrapper"
import ModalButton from "./ModalButton"

const Signup = ({ hideModal }) => {
  return (
    <ModalTemplete hideModal={hideModal}>
      <ModalBigWriting>Join Medium.</ModalBigWriting>
      <ModalMediumWriting>
        Create an account to receive great stories in your inbox, personalize
        your homepage, and follow authors and topics that you love.{" "}
      </ModalMediumWriting>
      <ModalButtonWrapper>
        <ModalButton>Sign up with Google</ModalButton>
        <ModalButton>Sign up with Facebook</ModalButton>
        <ModalButton>Sign up with email</ModalButton>
        <ModalMediumWriting>
          Already have an account? Sign in
        </ModalMediumWriting>
      </ModalButtonWrapper>
      <ModalSmallWriting>
        Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
        that Medium’s Privacy Policy applies to you.
      </ModalSmallWriting>
    </ModalTemplete>
  )
}

export default Signup
