import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterLeft = styled.div`
  max-width: 50%;
  flex-basis: 50%;
  padding: 0 16px;
  flex-grow: 0;
  display: block;

  @media (max-width: 727.98px) {
    max-width: 100%;
    border-bottom: 1px solid ${Color.lightGray};
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
`

export default CenterLeft
