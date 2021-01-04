import styled, { keyframes } from "styled-components"
import Color from "../../Constants/Color"

const placeholder = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const duration = "1.2s"

export const Rectangle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${Color.placeholder};
  animation: ${placeholder} ${duration} infinite;
`

export const Circle = styled.div`
  background-color: ${Color.placeholder};
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  border-radius: 50%;
  animation: ${placeholder} ${duration} infinite;
`

export const RoundedSquare = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-color: ${Color.placeholder};
  border-radius: 4px;
  animation: ${placeholder} ${duration} infinite;
`

export const LargeParagraph = styled.div`
  width: ${(props) => props.length};
  height: 16px;
  background-color: ${Color.placeholder};
  animation: ${placeholder} ${duration} infinite;
`

export const SmallParagraph = styled.div`
  width: ${(props) => props.length};
  height: 8px;
  background-color: ${Color.placeholder};
  animation: ${placeholder} ${duration} infinite;
`
