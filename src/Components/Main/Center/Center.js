import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${Color.yellow};
`

const Center = () => {
  return <CenterWrapper></CenterWrapper>
}

export default Center
