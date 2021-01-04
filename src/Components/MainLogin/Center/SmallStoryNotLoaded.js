import styled from "styled-components"
import {
  LargeParagraph,
  Rectangle,
  SmallParagraph,
  Circle,
} from "../../Placeholders/Placeholders"

const SmallStoryStyle = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex: 1 1 auto;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
`

const StoryInfo = styled.div`
  margin-right: 20px;
  width: 100%;
`

const StoryUser = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`

const StoryUserName = styled.div`
  margin-left: 8px;
  padding: 0;
`

const StoryTitle = styled.div`
  margin-bottom: 12px;
`

const StoryImageLink = styled.div``

const SmallStoryNotLoaded = () => {
  return (
    <SmallStoryStyle>
      <StoryInfo>
        <StoryUser>
          <Circle diameter="20px" />
          <StoryUserName>
            <SmallParagraph length="80px" />
          </StoryUserName>
        </StoryUser>
        <StoryTitle>
          <LargeParagraph length="100%" />
        </StoryTitle>
        <StoryTitle>
          <LargeParagraph length="80%" />
        </StoryTitle>
      </StoryInfo>
      <StoryImageLink>
        <Rectangle width="100px" height="100px" />
      </StoryImageLink>
    </SmallStoryStyle>
  )
}

export default SmallStoryNotLoaded
