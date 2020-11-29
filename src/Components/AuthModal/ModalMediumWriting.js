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
`

const GreenLink = styled.button`
  color: ${Colors.green};
  font-weight: 600;
`

const ModalMediumWriting = ({ ModalType, changeModal }) => {
  return (
    <ModalMediumWritingStyle>
      {ModalType === ModalTypeConstants.LOG_IN && (
        <div>
          No account?&nbsp;
          <GreenLink onClick={changeModal}>Create one</GreenLink>
        </div>
      )}
      {ModalType === ModalTypeConstants.SIGN_UP && (
        <div>
          Already have an account?&nbsp;
          <GreenLink onClick={changeModal}>Sign in</GreenLink>
        </div>
      )}
    </ModalMediumWritingStyle>
  )
}

export default ModalMediumWriting
