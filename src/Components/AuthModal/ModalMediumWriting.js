import styled from "styled-components"
import Colors from "../../Constants/Color"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const ModalMediumWritingStyle = styled.p`
  max-width: 316px;
  margin-top: 30px;
  margin-bottom: 0;
  text-align: center;
  color: ${Colors.borderBlack};
  font-family: Arial, Helvetica, sans-serif;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
`

const GreenLink = styled.button`
  color: ${Colors.green};
  font-weight: 600;
  border: 0;
  background: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;

  :hover {
    cursor: pointer;
  }
`

const ModalMediumWriting = ({ ModalType, changeModal }) => {
  return (
    <ModalMediumWritingStyle>
      {ModalType === ModalTypeConstants.LOG_IN && (
        <div>
          No account?&nbsp;
          <GreenLink
            onClick={() => {
              changeModal(false)
            }}
          >
            Create one
          </GreenLink>
        </div>
      )}
      {ModalType === ModalTypeConstants.SIGN_UP && (
        <div>
          Already have an account?&nbsp;
          <GreenLink
            onClick={() => {
              changeModal(false)
            }}
          >
            Sign in
          </GreenLink>
        </div>
      )}
      {ModalType === ModalTypeConstants.EMAIL_SIGN_UP &&
        "Enter your email address to create an account."}
      {ModalType === ModalTypeConstants.EMAIL_LOG_IN &&
        "Enter the email address associated with your account, and we'll send a magic link to your inbox."}
      {ModalType === ModalTypeConstants.EMAIL_NOT_EXISTS &&
        "Would you like to sign in with a different email?"}
    </ModalMediumWritingStyle>
  )
}

export default ModalMediumWriting
