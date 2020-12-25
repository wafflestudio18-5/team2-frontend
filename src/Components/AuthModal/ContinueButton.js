import styled from "styled-components"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const ContinueButtonStyle = styled.button`
  margin-top: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border-color: rgba(25, 25, 25, 1);
  background: rgba(25, 25, 25, 1);
  padding: 7px 16px 9px;
  font-size: 14px;
  display: inline-block;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`

const ContinueButton = ({ clickContinueButton, ModalType }) => {
  const onClick = () => {
    switch (ModalType) {
      case ModalTypeConstants.EMAIL_LOG_IN:
        clickContinueButton("log in")
        break
      case ModalTypeConstants.EMAIL_SIGN_UP:
        clickContinueButton("sign up")
        break
      default:
        console.log("invalid modal type")
        break
    }
  }
  return <ContinueButtonStyle onClick={onClick}>continue</ContinueButtonStyle>
}

export default ContinueButton
