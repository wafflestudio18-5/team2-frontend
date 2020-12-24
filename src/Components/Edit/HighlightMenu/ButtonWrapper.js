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

const ButtonWrapper = ({ buttonFunctions, story }) => {
  document.addEventListener("selectionchange", () => {
    if (!window.getSelection().getRangeAt(0).collapsed) {
      const { startId, endId } = getIdOfCaretPlaced(false)
      if (startId === "root" || endId === "root") {
        return
      }

      const [startSection, startContent] = startId
        .split(" ")
        .map((element) => parseInt(element))
      const [endSection, endContent] = endId
        .split(" ")
        .map((element) => parseInt(element))

      let emphasize = story[startSection][startContent].detail.emphasizing
      if (emphasize === "title") {
        emphasize = "largest"
      }
      if (emphasize === "subtitle" || emphasize === "kicker") {
        emphasize = "large"
      }

      let temp = story[startSection][startContent].detail.emphasizing

      mainLoop: for (
        var sectionIndex = startSection;
        sectionIndex <= endSection;
        sectionIndex++
      ) {
        for (
          var contentIndex = startContent;
          contentIndex <= endContent;
          contentIndex++
        ) {
          temp = story[sectionIndex][contentIndex].detail.emphasizing
          if (temp === "title") {
            temp = "largest"
          }
          if (temp === "subtitle" || temp === "kicker") {
            temp = "large"
          }
          if (temp !== emphasize) {
            emphasize = "normal"
            break mainLoop
          }
        }
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
