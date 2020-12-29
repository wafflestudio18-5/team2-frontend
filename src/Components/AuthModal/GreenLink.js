import styled from "styled-components"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import Color from "../../Constants/Color"

const GreenLinkStyle = styled.button`
  margin-top: 12px;
  margin-bottom: 28px;
  background: 0;
  border: 0;
  color: ${Color.green};

  :hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div``

const GreenLink = ({ changeModal, ModalType }) => {
  switch (ModalType) {
    case ModalTypeConstants.EMAIL_SIGN_UP:
      return (
        <GreenLinkStyle onClick={changeModal}>
          All sign up options
        </GreenLinkStyle>
      )

    case ModalTypeConstants.EMAIL_LOG_IN:
      return (
        <GreenLinkStyle onClick={changeModal}>
          All sign in options
        </GreenLinkStyle>
      )

    case ModalTypeConstants.EMAIL_NOT_EXISTS:
      return (
        <Wrapper>
          <GreenLinkStyle onClick={changeModal}>
            See all sign in options
          </GreenLinkStyle>
          or
          <GreenLinkStyle>create a new account</GreenLinkStyle>
        </Wrapper>
      )

    default:
      console.log("invalid modal type " + ModalType)
      break
  }
}

export default GreenLink
