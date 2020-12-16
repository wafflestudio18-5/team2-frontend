import Small from "./ImageStyles/Small"
import Normal from "./ImageStyles/Normal"
import Large from "./ImageStyles/Large"
import Largest from "./ImageStyles/Largest"
import styled from "styled-components"

const ImageStyle = ({ size, children }) => {
  switch (size) {
    case "small":
      return <Small>{children}</Small>

    case "normal":
      return <Normal>{children}</Normal>

    case "large":
      return <Large>{children}</Large>

    case "largest":
      return <Largest>{children}</Largest>

    default:
      break
  }
}

const Img = styled.img`
  width: 100%;
`

const Caption = styled.figcaption`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.68);
  letter-spacing: 0;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  overflow-wrap: break-word;
  font-family: "Noto Sans";
`

const Image = ({ detail }) => {
  return (
    <ImageStyle size={detail.size}>
      <Img src={detail.imgsrc} />
      <Caption contentEditable="true">{detail.caption}</Caption>
    </ImageStyle>
  )
}

export default Image
