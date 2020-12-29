import ModalOverlay from "./ModalOverlay"
import ModalTemplete from "./ModalTemplete"
import styled, { keyframes, css } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
  overflow-y: scroll;
  animation: 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running
    ${fadeIn};
  ${(props) =>
    !props.modalVisible &&
    css`
      animation: 100ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards
        running ${fadeOut};
    `}
`

const AuthModal = ({ ...props }) => {
  return (
    <ModalStyle modalVisible={props.modalVisible}>
      <ModalOverlay onClick={props.hideModal} />
      <ModalTemplete {...props} />
    </ModalStyle>
  )
}

export default AuthModal
