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
  width: auto;
  height: auto;
  display: none;
  position: absolute;
  animation: ${popUpwards} 180ms forwards linear;
`

const HighlightMenu = ({ ...props }) => {
  document.addEventListener("selectionchange", () => {
    var highlightMenu = document.getElementById("highlightMenu")
    var range = window.getSelection().getRangeAt(0)

    if (range.collapsed) {
      highlightMenu.style.display = "none"
    } else {
      var rect = range.getBoundingClientRect()
      highlightMenu.style.top =
        rect.top - 50 + document.documentElement.scrollTop + "px"
      highlightMenu.style.left = rect.left + rect.width / 2 - 90 + "px"
      highlightMenu.style.display = "inline-block"
    }
  })

  return (
    <HighlightMenuStyle id="highlightMenu">
      <ButtonWrapper {...props}></ButtonWrapper>
      <Arrow />
    </HighlightMenuStyle>
  )
}

export default HighlightMenu
