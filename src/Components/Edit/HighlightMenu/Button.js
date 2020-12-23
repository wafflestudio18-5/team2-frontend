import styled from "styled-components"
import Bold from "./ButtonIcons/Bold"
import Emphasize from "./ButtonIcons/Emphasize"
import Italic from "./ButtonIcons/Italic"
import Large from "./ButtonIcons/Large"
import Largest from "./ButtonIcons/Largest"
import LargeImage from "./ButtonIcons/LargeImage"
import LargestImage from "./ButtonIcons/LargestImage"
import NormalImage from "./ButtonIcons/NormalImage"

const ButtonStyle = styled.button`
  margin: 0 8px;
  height: 44px;
  line-height: 46px;
  display: flex;
  align-items: center;
  border: 0;
  color: #fff;
  box-sizing: content-box;
  padding: 0;
  text-align: left;
  background: 0;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`

const Button = ({ type, buttonFunctions, activated }) => {
  switch (type) {
    case "bold":
      return (
        <ButtonStyle onClick={buttonFunctions.makeBold}>
          <Bold activated={activated} />
        </ButtonStyle>
      )
    case "italic":
      return (
        <ButtonStyle onClick={buttonFunctions.makeItalic}>
          <Italic activated={activated} />
        </ButtonStyle>
      )
    case "largest":
      return (
        <ButtonStyle onClick={buttonFunctions.makeLargest}>
          <Largest activated={activated} />
        </ButtonStyle>
      )
    case "large":
      return (
        <ButtonStyle onClick={buttonFunctions.makeLarge}>
          <Large activated={activated} />
        </ButtonStyle>
      )
    case "emphasize":
      return (
        <ButtonStyle onClick={buttonFunctions.changeEmphasize}>
          <Emphasize activated={activated} />
        </ButtonStyle>
      )
    case "normalImage":
      return (
        <ButtonStyle>
          <NormalImage activated={activated} />
        </ButtonStyle>
      )
    case "largeImage":
      return (
        <ButtonStyle>
          <LargeImage activated={activated} />
        </ButtonStyle>
      )
    case "largestImage":
      return (
        <ButtonStyle>
          <LargestImage activated={activated} />
        </ButtonStyle>
      )
    default:
      break
  }
}

export default Button
