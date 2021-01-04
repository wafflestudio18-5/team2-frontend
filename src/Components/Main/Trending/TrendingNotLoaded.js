import {
  LargeParagraph,
  SmallParagraph,
  RoundedSquare,
} from "../../Placeholders/Placeholders"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
`

const TrendingBlockWriter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const TrendingBlockProfile = styled.div`
  margin-right: 8px;
`

const TrendingBlockTitle = styled.div`
  margin-bottom: 20px;
`

const TrendingBlockDateAndTime = styled.div``

const TrendingNotLoaded = () => {
  return (
    <Wrapper>
      <TrendingBlockWriter>
        <TrendingBlockProfile>
          <RoundedSquare width="20px" />
        </TrendingBlockProfile>
        <SmallParagraph length="80px" />
      </TrendingBlockWriter>
      <TrendingBlockTitle>
        <LargeParagraph length="100%" />
      </TrendingBlockTitle>
      <TrendingBlockDateAndTime>
        <SmallParagraph length="60px" />
      </TrendingBlockDateAndTime>
    </Wrapper>
  )
}

export default TrendingNotLoaded
