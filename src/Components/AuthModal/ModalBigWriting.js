import styled from "styled-components"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const ModalBigWritingStyle = styled.p`
  letter-spacing: -0.07em;
  font-size: 28px;
  font-family: "Lora";
  color: rgba(8, 8, 8, 1);
  font-weight: 500;
  margin: 0;
`

const ModalBigWriting = ({ ModalType }) => {
  return (
    <ModalBigWritingStyle>
      {ModalType === ModalTypeConstants.LOG_IN && "Welcome back."}
      {ModalType === ModalTypeConstants.SIGN_UP && "Join Wadium."}
      {ModalType === ModalTypeConstants.EMAIL_LOG_IN && "Sign in with email"}
      {ModalType === ModalTypeConstants.EMAIL_SIGN_UP && "Sign up with email"}
      {ModalType === ModalTypeConstants.EMAIL_NOT_EXISTS &&
        "Sorry, we didn't recognize that email."}
      {(ModalType === ModalTypeConstants.EMAIL_SENT_LOG_IN ||
        ModalType === ModalTypeConstants.EMAIL_SENT_SIGN_UP) &&
        "Check your inbox"}
    </ModalBigWritingStyle>
  )
}

export default ModalBigWriting
