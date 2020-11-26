import ModalOverlay from "./ModalOverlay"
import Login from "./Login"
import Signup from "./Signup"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import styled from "styled-components"

const ModalStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const AuthModal = ({ ModalType, hideModal }) => {
  return (
    <ModalStyle>
      <ModalOverlay onClick={hideModal} />
      {ModalType === ModalTypeConstants.LOG_IN && (
        <Login hideModal={hideModal} />
      )}
      {ModalType === ModalTypeConstants.SIGN_UP && (
        <Signup hideModal={hideModal} />
      )}
    </ModalStyle>
  )
}

export default AuthModal
