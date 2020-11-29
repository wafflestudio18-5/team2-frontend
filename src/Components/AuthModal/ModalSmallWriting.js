import styled from "styled-components"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import Colors from "../../Constants/Color"

const ModalSmallWritingStyle = styled.p`
  width: 314px;
  color: ${Colors.gray};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.01em;
`

const ModalSmallWriting = ({ ModalType }) => {
  return (
    <ModalSmallWritingStyle>
      {ModalType === ModalTypeConstants.LOG_IN &&
        "Click “Sign In” to agree to Wadium’s Terms of Service and acknowledge that Wadium’s Privacy Policy applies to you."}
      {ModalType === ModalTypeConstants.SIGN_UP &&
        "Click “Sign Up” to agree to Wadium’s Terms of Service and acknowledge that Wadium’s Privacy Policy applies to you."}
    </ModalSmallWritingStyle>
  )
}

export default ModalSmallWriting
