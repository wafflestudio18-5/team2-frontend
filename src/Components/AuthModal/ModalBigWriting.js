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
    </ModalBigWritingStyle>
  )
}

export default ModalBigWriting
