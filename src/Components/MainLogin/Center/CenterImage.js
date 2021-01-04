import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterImage = styled.div`
  border-left: 1px solid ${Color.lightGray};
  box-sizing: border-box;
  margin-left: 20px;
  height: calc(100% - 20px);

  @media (max-width: 1080px) {
    display: none;
  }
`

export default CenterImage
