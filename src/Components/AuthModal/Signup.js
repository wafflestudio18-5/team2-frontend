import ModalTemplete from "./ModalTemplete"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButtonWrapper from "./ModalButtonWrapper"
import ModalButton from "./ModalButton"
import ButtonLogoSvg from "./ButtonLogoSvg"

const Signup = ({ hideModal }) => {
  return (
    <ModalTemplete hideModal={hideModal}>
      <ModalBigWriting>Join Medium.</ModalBigWriting>
      <ModalMediumWriting>
        Create an account to receive great stories in your inbox, personalize
        your homepage, and follow authors and topics that you love.{" "}
      </ModalMediumWriting>
      <ModalButtonWrapper>
        <ModalButton>
          <ButtonLogoSvg width="25" height="25">
            <g fill="none">
              <path
                d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                fill="#34A853"
              ></path>
              <path
                d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                fill="#EA4335"
              ></path>
            </g>
          </ButtonLogoSvg>
          Sign up with Google
        </ModalButton>
        <ModalButton>
          <ButtonLogoSvg width="25" height="25" fill="#3B5998" class="vb py u">
            <path
              d="M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7"
              fill-rule="evenodd"
            ></path>
          </ButtonLogoSvg>
          Sign up with Facebook
        </ModalButton>
        <ModalButton>
          <ButtonLogoSvg width="25" height="25" class="vb py u">
            <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
          </ButtonLogoSvg>
          Sign up with email
        </ModalButton>
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
