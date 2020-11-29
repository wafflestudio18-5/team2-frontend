import ModalOverlay from "./ModalOverlay"
import ModalTemplete from "./ModalTemplete"
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
      <ModalTemplete hideModal={hideModal} />
    </ModalStyle>
  )
}

export default AuthModal
