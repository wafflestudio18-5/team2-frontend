import styled from "styled-components"
import Colors from "../../Constants/Color"
import { Google, Facebook, Email } from "./ButtonLogos"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const ModalButtonStyle = styled.button`
  width: 212px;
  height: 41px;
  box-sizing: border-box;
  margin-bottom: 12px;
  background-color: white;
  border: 1px solid ${Colors.borderGray};
  border-radius: 4px;
  color: ${Colors.borderBlack};
  line-height: 20px;
  text-align: left;
  padding-left: 16px;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

const ModalButton = ({ ModalType, Logo, changeModal, googleLogin }) => {
  switch (Logo) {
    case "Google":
      return (
        <ModalButtonStyle onClick={googleLogin}>
          <Google />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with " + Logo}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with " + Logo}
        </ModalButtonStyle>
      )

    case "Facebook":
      return (
        <ModalButtonStyle>
          <Facebook />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with " + Logo}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with " + Logo}
        </ModalButtonStyle>
      )

    case "email":
      return (
        <ModalButtonStyle
          onClick={() => {
            changeModal(true)
          }}
        >
          <Email />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with " + Logo}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with " + Logo}
        </ModalButtonStyle>
      )

    default:
      return
  }
}

export default ModalButton
