import styled from "styled-components"

const CenterBigWriting = styled.h2`
  font-family: serif;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.1em;

  @media (min-width: 552px) {
    font-size: 70px;
    line-height: 74px;
  }
  @media (max-width: 551.98px) {
    font-size: 50px;
    line-height: 52px;
  }
`

export default CenterBigWriting
