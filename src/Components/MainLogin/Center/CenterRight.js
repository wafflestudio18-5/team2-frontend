import styled from "styled-components"

const CenterRight = styled.div`
  max-width: 33.3333%;
  flex-basis: 33.3333%;
  padding-left: 16px;
  padding-right: 8px;
  flex-grow: 0;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    max-width: 50%;
    flex-basis: 50%;
    padding-right: 0;
  }

  @media (max-width: 727.98px) {
    max-width: 100%;
    padding-left: 0;
  }
`

export default CenterRight
