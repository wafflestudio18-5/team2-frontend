import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterLeft = styled.div`
  max-width: 33.3333%;
  flex-basis: 33.3333%;
  box-sizing: border-box;
  padding-right: 16px;
  flex-grow: 0;
  display: block;

  @media (max-width: 1080px) {
    max-width: 50%;
    flex-basis: 50%;
  }

  @media (max-width: 727.98px) {
    max-width: 100%;
    border-bottom: 1px solid ${Color.lightGray};
    margin-bottom: 32px;
    padding-bottom: 32px;
    padding-right: 0;
  }
`

export default CenterLeft
