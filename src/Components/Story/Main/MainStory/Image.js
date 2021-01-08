import Normal from "./ImageStyles/Normal"
import styled from "styled-components"
import Color from "../../../../Constants/Color"

const ImageStyle = ({ size, children }) => {
  switch (size) {
    case "normal":
      return <Normal>{children}</Normal>
    case "large":
      return <Normal>{children}</Normal>
    case "largest":
      return <Normal>{children}</Normal>
    default:
      break
  }
}

const Img = styled.img`
  width: 100%;
  &:hover {
    cursor: zoom-in;
  }
`

const Caption = styled.figcaption`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${Color.gray};
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
      <Caption>{detail.content}</Caption>
    </ImageStyle>
  )
}

export default Image
