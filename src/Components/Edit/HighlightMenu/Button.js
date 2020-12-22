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

const Button = ({ type }) => {
  switch (type) {
    case "bold":
      return (
        <ButtonStyle>
          <Bold />
        </ButtonStyle>
      )
    case "italic":
      return (
        <ButtonStyle>
          <Italic />
        </ButtonStyle>
      )
    case "largest":
      return (
        <ButtonStyle>
          <Largest />
        </ButtonStyle>
      )
    case "large":
      return (
        <ButtonStyle>
          <Large />
        </ButtonStyle>
      )
    case "emphasize":
      return (
        <ButtonStyle>
          <Emphasize />
        </ButtonStyle>
      )
    case "normalImage":
      return (
        <ButtonStyle>
          <NormalImage />
        </ButtonStyle>
      )
    case "largeImage":
      return (
        <ButtonStyle>
          <LargeImage />
        </ButtonStyle>
      )
    case "largestImage":
      return (
        <ButtonStyle>
          <LargestImage />
        </ButtonStyle>
      )
    default:
      break
  }
}

export default Button
