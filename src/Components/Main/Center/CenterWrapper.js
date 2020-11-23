import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterWrapper = styled.div`
  width: 100%;
  background-color: ${Color.yellow};
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 904px) {
    padding: 0 64px;
    height: 400px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
    height: 400px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
    height: 368px;
  }
`

export default CenterWrapper
