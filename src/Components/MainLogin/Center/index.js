import styled from "styled-components"
import CenterLeft from "./CenterLeft"
import CenterRight from "./CenterRight"

const CenterWrapper = styled.div``

const Center = () => {
  return (
    <CenterWrapper>
      <CenterLeft>left</CenterLeft>
      <CenterRight>right</CenterRight>
    </CenterWrapper>
  )
}

export default Center
