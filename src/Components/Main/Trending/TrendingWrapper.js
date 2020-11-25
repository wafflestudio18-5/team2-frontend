import styled from "styled-components"

const TrendingWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (min-width: 1080px) {
    padding: 0 64px;
  }
  @media (max-width: 1079.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
  }
`

export default TrendingWrapper
