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

const Img = styled.img``

const Caption = styled.figcaption``

const Image = ({ detail }) => {
  return (
    <ImageStyle size={detail.size}>
      <Img src={detail.imgsrc} />
      <Caption>{detail.caption}</Caption>
    </ImageStyle>
  )
}

export default Image
