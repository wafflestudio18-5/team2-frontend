import styled, { keyframes } from "styled-components"

const shake = keyframes`
  0% {
   transform: translateX(3px); 
  }
  20% {
    transform: translateX(-3px);
  }
  40% {
    transform: translateX(3px);
  }
  60% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(-3px);
  }
`

const Input = styled.input`
  margin: 0;
  margin-bottom: 15px;
  width: 247px;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom-color: ${(props) => {
    switch (props.alertInvalidInput) {
      case true:
        return "rgb(201, 74, 74)"
      default:
        break
    }
  }};
  padding: 0 5px;
  height: 35px;
  font-size: 16px;

  :focus {
    outline: 0;
  }

  &.onAnimation {
    animation-fill-mode: forwards;
    animation: 400ms ease 0s 1 normal none running ${shake};
  }
`

export default Input
