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

const ModalButton = ({ ModalType, Logo }) => {
  return (
    <ModalButtonStyle>
      {Logo === "Google" && <Google />}
      {Logo === "Facebook" && <Facebook />}
      {Logo === "Email" && <Email />}
      {ModalType === ModalTypeConstants.LOG_IN && "Sign in with " + Logo}
      {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with " + Logo}
    </ModalButtonStyle>
  )
}

export default ModalButton
