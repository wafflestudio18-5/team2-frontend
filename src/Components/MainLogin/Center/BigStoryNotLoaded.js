import styled from "styled-components"
import {
  LargeParagraph,
  Rectangle,
  SmallParagraph,
  Circle,
} from "../../Placeholders/Placeholders"

const BigStoryStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StoryImageLink = styled.div`
  height: 290px;
  margin-bottom: 16px;
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

const StoryDate = styled.div``

const BigStoryNotLoaded = () => {
  return (
    <BigStoryStyle>
      <StoryImageLink>
        <Rectangle width="100%" height="100%" />
      </StoryImageLink>
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
        <LargeParagraph length="60%" />
      </StoryTitle>
      <StoryTitle>
        <LargeParagraph length="80%" />
      </StoryTitle>
      <StoryDate>
        <SmallParagraph length="60px" />
      </StoryDate>
    </BigStoryStyle>
  )
}

export default BigStoryNotLoaded
