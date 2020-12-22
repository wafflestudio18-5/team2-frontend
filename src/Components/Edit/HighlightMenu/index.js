import styled, { keyframes } from "styled-components"
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
  left: 50px;
  top: 50px;
  display: inline-block;
  position: absolute;
  animation: ${popUpwards} 180ms forwards linear;
`

const HighlightMenu = () => {
  return (
    <HighlightMenuStyle>
      <ButtonWrapper></ButtonWrapper>
      <Arrow />
    </HighlightMenuStyle>
  )
}

export default HighlightMenu
