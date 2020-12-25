import styled, { keyframes, css } from "styled-components"
import Colors from "../../Constants/Color"
import ModalContent from "./ModalContent"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButtonWrapper from "./ModalButtonWrapper"
import ModalButton from "./ModalButton"
import ModalInput from "./ModalInput"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    transform: scale(.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  75% {
    transform: scale(.9);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`

const ModalTempleteStyle = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 44px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  min-height: 695px;

  @media (min-width: 904px) {
    width: 678px;
    height: 695px;
  }

  @media (max-width: 903.98px) {
    height: 100vh;
    width: 600px;
  }

  @media (max-width: 727.98px) {
    width: 100vw;
    padding-top: 120px;
    padding-bottom: 44px;
  }

  animation: 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running
    ${fadeIn};

  ${(props) =>
    !props.modalVisible &&
    css`
      animation: 100ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards
        running ${fadeOut};
    `}
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: 0;
  background: 0;
  padding: 0;
  :hover {
    cursor: pointer;
  }
`

const Svg = styled.svg`
  fill: ${Colors.gray};
`

const ModalTemplete = ({ ModalType, hideModal, changeModal, modalVisible }) => {
  let modalFirstPage = true
  if (
    ModalType === ModalTypeConstants.EMAIL_LOG_IN ||
    ModalType === ModalTypeConstants.EMAIL_SIGN_UP
  ) {
    modalFirstPage = false
  }
  return (
    <ModalTempleteStyle modalVisible={modalVisible}>
      <CloseButton onClick={hideModal}>
        <Svg class="sf" width="29" height="29">
          <path
            d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            fill-rule="evenodd"
          ></path>
        </Svg>
      </CloseButton>
      {modalFirstPage && (
        <ModalContent>
          <ModalBigWriting ModalType={ModalType} />
          <ModalButtonWrapper>
            <ModalButton Logo="Google" ModalType={ModalType} />
            <ModalButton Logo="Facebook" ModalType={ModalType} />
            <ModalButton
              Logo="email"
              ModalType={ModalType}
              changeModal={changeModal}
            />
            <ModalMediumWriting
              ModalType={ModalType}
              changeModal={changeModal}
            />
          </ModalButtonWrapper>
          <ModalSmallWriting ModalType={ModalType} />
        </ModalContent>
      )}
      {!modalFirstPage && (
        <ModalContent>
          <ModalBigWriting ModalType={ModalType} />
          <ModalMediumWriting ModalType={ModalType} />
          <ModalInput />
          <a
            onClick={() => {
              changeModal(true)
            }}
          >
            All signin options
          </a>
        </ModalContent>
      )}
    </ModalTempleteStyle>
  )
}

export default ModalTemplete
