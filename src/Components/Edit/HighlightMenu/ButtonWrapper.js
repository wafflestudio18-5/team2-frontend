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
  let activated = {
    bold: false,
    italic: false,
    largest: false,
    large: false,
    emphasize: false,
  }

  const { startId, endId } = getIdOfCaretPlaced(false)
  const [startSection, startContent] = startId
    .split(" ")
    .map((element) => parseInt(element))
  const [endSection, endContent] = endId
    .split(" ")
    .map((element) => parseInt(element))

  let emphasize = story[startSection][startContent].detail.emphasizing

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
      if (story[sectionIndex][contentIndex].detail.emphasizing !== emphasize) {
        emphasize = "normal"
        break mainLoop
      }
    }
  }
  switch (emphasize) {
    case "largest":
      activated.largest = true
      break

    case "large":
      activated.large = true
      break

    case "emphasize1" || "emphasize2":
      activated.emphasize = true
      break

    default:
      break
  }

  return (
    <ButtonWrapperStyle>
      <Button
        type="bold"
        buttonFunctions={buttonFunctions}
        activated={activated.bold}
      />
      <Button
        type="italic"
        buttonFunctions={buttonFunctions}
        activated={activated.italic}
      />
      <ButtonDivider />
      <Button
        type="largest"
        buttonFunctions={buttonFunctions}
        activated={activated.largest}
      />
      <Button
        type="large"
        buttonFunctions={buttonFunctions}
        activated={activated.large}
      />
      <Button
        type="emphasize"
        buttonFunctions={buttonFunctions}
        activated={activated.emphasize}
      />
    </ButtonWrapperStyle>
  )
}

export default ButtonWrapper
