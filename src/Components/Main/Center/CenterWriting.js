import styled from "styled-components"
import CenterBigWriting from "./CenterBigWriting"
import CenterSmallWriting from "./CenterSmallWriting"
import CenterStartButton from "./CenterStartButton"

const CenterWritingStyle = styled.div`
  width: 550px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 33px;
  padding-bottom: 51px;
  display: flex;
  flex-direction: column;

  @media (min-width: 904px) {
    width: 550px;
  }
  @media (max-width: 903.98px) {
    width: 500px;
  }
  @media (max-width: 551.98px) {
    width: 100%;
  }
`

const CenterWriting = () => {
  return (
    <CenterWritingStyle>
      <CenterBigWriting>Where good ideas find you</CenterBigWriting>
      <CenterSmallWriting />
      <CenterStartButton>Get Started</CenterStartButton>
    </CenterWritingStyle>
  )
}

export default CenterWriting
