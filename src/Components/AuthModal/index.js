import ModalOverlay from "./ModalOverlay"
import ModalTemplete from "./ModalTemplete"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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
  animation: 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running
    ${fadeIn};
`

const AuthModal = ({ ModalType, hideModal, changeModal }) => {
  return (
    <ModalStyle>
      <ModalOverlay onClick={hideModal} />
      <ModalTemplete
        ModalType={ModalType}
        hideModal={hideModal}
        changeModal={changeModal}
      />
    </ModalStyle>
  )
}

export default AuthModal
