import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterSmallWritingStyle = styled.h3`
  margin-top: 0px;
  margin-bottom: 25px;
  color: ${Color.borderBlack};
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Arial";
`

const CenterSmallWriting = () => {
  return (
    <CenterSmallWritingStyle>
      Read and share new perspectives on just about any topic. Everyone’s
      welcome.&nbsp;
      <a href="https://about.medium.com/">Learn more.</a>
    </CenterSmallWritingStyle>
  )
}

export default CenterSmallWriting
