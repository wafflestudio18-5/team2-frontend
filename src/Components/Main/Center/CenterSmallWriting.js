import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterSmallWritingStyle = styled.h3`
  margin-bottom: 25px;
  color: ${Color.borderBlack};
  font-weight: 500;
  font-family: "Arial";
  letter-spacing: -0.02em;

  @media (min-width: 728px) {
    margin-top: 53px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 727.98px) {
    margin-top: 29px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 551.98px) {
    margin-top: 74px;
    width: 477px;
  }
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
