import styled, { keyframes, css } from "styled-components"
import ButtonWrapper from "./ButtonWrapper"
import Arrow from "./Arrow"

const popUpwards = keyframes`
  0% {
    transform: matrix(.97,0,0,1,0,12);
    opacity: 0;
  }

  20%{
    transform: matrix(.99,0,0,1,0,2);
    opacity: .7;
  }

  40%{
    transform: matrix(1,0,0,1,0,-1);
    opacity: 1;
  }

  70%{
    transform: matrix(1,0,0,1,0,0);
    opacity: 1;
  }

  100%{
    transform: matrix(1,0,0,1,0,0);
    opacity: 1;
  }
`

const HighlightMenuStyle = styled.div`
  width: auto;
  height: auto;
  ${(props) =>
    css`
      left: ${props.position.left};
      top: ${props.position.top};
    `}
  display: inline-block;
  position: absolute;
  animation: ${popUpwards} 180ms forwards linear;
`

const HighlightMenu = ({ buttonFunctions, range }) => {
  let position = { left: 0, top: 0 }
  if (range !== 0) {
    const rect = range.getBoundingClientRect()
    position = {
      left: rect.left + rect.width / 2 - 90 + "px",
      top: rect.top - 50 + "px",
    }
  }

  return (
    <HighlightMenuStyle position={position}>
      <ButtonWrapper buttonFunctions={buttonFunctions}></ButtonWrapper>
      <Arrow />
    </HighlightMenuStyle>
  )
}

export default HighlightMenu
