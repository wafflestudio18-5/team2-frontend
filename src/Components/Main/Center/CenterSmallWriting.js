import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterSmallWritingStyle = styled.h3`
  margin-top: 0px;
  margin-bottom: 25px;
  color: ${Color.borderBlack};
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Arial";
  letter-spacing: -0.02em;
`

const Styleda = styled.a`
  color: inherit;
`

const CenterSmallWriting = () => {
  return (
    <CenterSmallWritingStyle>
      Read and share new perspectives on just about any topic. Everyone’s
      welcome.&nbsp;
      <Styleda href="https://about.medium.com/">Learn more.</Styleda>
    </CenterSmallWritingStyle>
  )
}

export default CenterSmallWriting
