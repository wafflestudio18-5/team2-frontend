import styled from "styled-components"
import Button from "./Button"
import ButtonDivider from "./ButtonDivider"
import getIdOfCaretPlaced from "../../../Pages/Edit/Functions/getIdOfCaretPlaced"

const ButtonWrapperStyle = styled.div`
  position: relative;
  background-image: linear-gradient(to bottom, rgba(49, 49, 47, 0.99), #262625);
  background-repeat: repeat-x;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

const ButtonWrapper = ({ buttonFunctions }) => {
  document.addEventListener("selectionchange", () => {
    try {
      window.getSelection().getRangeAt(0)
    } catch (error) {
      return
    }
    if (!window.getSelection().getRangeAt(0).collapsed) {
      const { startTarget, endTarget } = getIdOfCaretPlaced(false)
      let emphasize = startTarget.getAttribute("data-emphasizing")
      if (emphasize === "title") {
        emphasize = "largest"
      }
      if (emphasize === "subtitle" || emphasize === "kicker") {
        emphasize = "large"
      }
      let temp = emphasize
      let currentElement = startTarget

      while (currentElement !== null && currentElement !== endTarget) {
        temp = currentElement.getAttribute("data-emphasizing")
        if (temp === "title") {
          temp = "largest"
        }
        if (temp === "subtitle" || temp === "kicker") {
          temp = "large"
        }
        if (temp === "normal" || temp !== emphasize) {
          emphasize = "normal"
        }
        currentElement = currentElement.nextSibling
      }

      switch (emphasize) {
        case "largest":
          document.getElementById("largeSvg").style.fill = "#fff"
          document.getElementById("largestSvg").style.fill = "#b5e5a4"
          document.getElementById("emphasizeSvg").style.fill = "#fff"
          break

        case "large":
          document.getElementById("largeSvg").style.fill = "#b5e5a4"
          document.getElementById("largestSvg").style.fill = "#fff"
          document.getElementById("emphasizeSvg").style.fill = "#fff"
          break

        case "emphasize1":
        case "emphasize2":
          document.getElementById("largeSvg").style.fill = "#fff"
          document.getElementById("largestSvg").style.fill = "#fff"
          document.getElementById("emphasizeSvg").style.fill = "#b5e5a4"
          break

        default:
          document.getElementById("largeSvg").style.fill = "#fff"
          document.getElementById("largestSvg").style.fill = "#fff"
          document.getElementById("emphasizeSvg").style.fill = "#fff"
          break
      }
    }
  })

  return (
    <ButtonWrapperStyle>
      <Button type="bold" buttonFunctions={buttonFunctions} />
      <Button type="italic" buttonFunctions={buttonFunctions} />
      <ButtonDivider />
      <Button type="largest" buttonFunctions={buttonFunctions} />
      <Button type="large" buttonFunctions={buttonFunctions} />
      <Button type="emphasize" buttonFunctions={buttonFunctions} />
    </ButtonWrapperStyle>
  )
}

export default ButtonWrapper
