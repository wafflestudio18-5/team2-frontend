import styled from "styled-components"
import Colors from "../../Constants/Color"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButtonWrapper from "./ModalButtonWrapper"
import ModalButton from "./ModalButton"

const ModalTempleteStyle = styled.div`
  position: relative;
  width: 678px;
  height: 695px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 44px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ModalTemplete = ({ ModalType, hideModal }) => {
  return (
    <ModalTempleteStyle>
      <CloseButton onClick={hideModal}>
        <Svg class="sf" width="29" height="29">
          <path
            d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            fill-rule="evenodd"
          ></path>
        </Svg>
      </CloseButton>
      <ModalBigWriting ModalType={ModalType} />
      <ModalButtonWrapper>
        <ModalButton Logo="Google" ModalType={ModalType} />
        <ModalButton Logo="Facebook" ModalType={ModalType} />
        <ModalButton Logo="Email" ModalType={ModalType} />
        <ModalMediumWriting ModalType={ModalType} />
      </ModalButtonWrapper>
      <ModalSmallWriting ModalType={ModalType} />
    </ModalTempleteStyle>
  )
}

export default ModalTemplete
