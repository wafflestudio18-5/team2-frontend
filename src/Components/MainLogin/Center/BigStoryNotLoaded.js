import styled from "styled-components"
import {
  LargeParagraph,
  Rectangle,
  SmallParagraph,
  Circle,
} from "../../Placeholders/Placeholders"

const BigStoryStyle = styled.div``

const StoryImageLink = styled.div``

const StoryUser = styled.div``

const StoryUserName = styled.div``

const StoryTitle = styled.div``

const StoryDate = styled.div``

const BigStoryNotLoaded = () => {
  return (
    <BigStoryStyle>
      <StoryImageLink>
        <Rectangle />
      </StoryImageLink>
      <StoryUser>
        <Circle />
        <StoryUserName>
          <SmallParagraph />
        </StoryUserName>
      </StoryUser>
      <StoryTitle>
        <LargeParagraph />
      </StoryTitle>
      <StoryTitle>
        <LargeParagraph />
      </StoryTitle>
      <StoryTitle>
        <LargeParagraph />
      </StoryTitle>
      <StoryDate>
        <SmallParagraph />
      </StoryDate>
    </BigStoryStyle>
  )
}

export default BigStoryNotLoaded
