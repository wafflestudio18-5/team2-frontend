import styled, { keyframes } from "styled-components"
import Color from "../../Constants/Color"

const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`

const ModalInputMessage = styled.p`
  margin: 12px 0;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => {
    switch (props.alertWrongEmail) {
      case true:
        return "rgb(201, 74, 74)"
      case false:
        return Color.borderBlack
      default:
        break
    }
  }};
`

const shake = keyframes`
  0% {
   transform: translate(0 0); 
  }
  25% {
    transform: translate(1px 0);
  }
  50% {
    transform: translate(0 0);
  }
  75% {
    transform: translate(-1px 0);
  }
  100% {
    transform: translate(0 0);
  }
`

const ModalInputStyle = styled.input`
  width: 270px;
  border: 0;
  border-bottom: 1px solid
    ${(props) => {
      switch (props.alertWrongEmail) {
        case true:
          return "rgb(201, 74, 74)"
        case false:
          return "rgb(168, 168, 168)"
        default:
          break
      }
    }};
  color: ${Color.borderBlack};
  padding: 3px 2px;
  text-align: center;
  font-size: 15px;

  :focus {
    outline: 0;
    border-bottom-color: ${(props) => {
      switch (props.alertWrongEmail) {
        case true:
          return "rgb(201, 74, 74)"
        case false:
          return Color.borderBlack
        default:
          break
      }
    }};
  }

  .onAnimation {
    animation-fill-mode: forwards;
    animation: 400ms ease 0s 1 normal none running ${shake};
  }
`

const WrongEmailMessage = styled.p`
  margin-top: 8px;
  margin-bottom: 28px;
  font-size: 13px;
  line-height: 20px;
  color: rgb(201, 74, 74);
`

const ModalInput = ({ updateEmailOnChange, alertWrongEmail }) => {
  return (
    <ModalInputWrapper>
      <ModalInputMessage alertWrongEmail={alertWrongEmail}>
        Your email
      </ModalInputMessage>
      <ModalInputStyle
        id="EmailInputField"
        alertWrongEmail={alertWrongEmail}
        onChange={updateEmailOnChange}
      />
      <WrongEmailMessage>
        {alertWrongEmail && "Please enter a valid email address."}
      </WrongEmailMessage>
    </ModalInputWrapper>
  )
}

export default ModalInput
