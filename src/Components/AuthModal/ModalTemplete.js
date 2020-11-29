import styled from "styled-components"
import Colors from "../../Constants/Color"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalSmallWriting from "./ModalSmallWriting"
import ModalButtonWrapper from "./ModalButtonWrapper"
import ModalButton from "./ModalButton"
import { Google, Facebook, Email } from "./ButtonLogos"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

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
      <ModalBigWriting>
        {ModalType === ModalTypeConstants.LOG_IN && "Welcome back."}
        {ModalType === ModalTypeConstants.SIGN_UP && "Join Wadium."}
      </ModalBigWriting>
      <ModalButtonWrapper>
        <ModalButton>
          <Google />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with Google"}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with Google"}
        </ModalButton>
        <ModalButton>
          <Facebook />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with Google"}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with Google"}
        </ModalButton>
        <ModalButton>
          <Email />
          {ModalType === ModalTypeConstants.LOG_IN && "Sign in with Google"}
          {ModalType === ModalTypeConstants.SIGN_UP && "Sign up with Google"}
        </ModalButton>
        <ModalMediumWriting>
          {ModalType === ModalTypeConstants.LOG_IN && "No account? Create one"}
          {ModalType === ModalTypeConstants.SIGN_UP &&
            "Already have an account? Sign in"}
        </ModalMediumWriting>
      </ModalButtonWrapper>
      <ModalSmallWriting>
        Click “Sign Up” to agree to Wadium’s Terms of Service and acknowledge
        that Wadium’s Privacy Policy applies to you.
      </ModalSmallWriting>
    </ModalTempleteStyle>
  )
}

export default ModalTemplete
