import styled from "styled-components"
import CenterBigWriting from "./CenterBigWriting"
import CenterSmallWriting from "./CenterSmallWriting"
import CenterStartButton from "./CenterStartButton"

const CenterWritingStyle = styled.div`
  width: 550px;
`

const CenterWriting = () => {
  return (
    <CenterWritingStyle>
      <CenterBigWriting>Where good ideas find you</CenterBigWriting>
      <CenterSmallWriting>
        Read and share new perspectives on just about any topic. Everyone’s
        welcome. Learn more.
      </CenterSmallWriting>
      <CenterStartButton>Get Started</CenterStartButton>
    </CenterWritingStyle>
  )
}

export default CenterWriting
