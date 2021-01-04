import styled from "styled-components"
import {
  LargeParagraph,
  Rectangle,
  SmallParagraph,
  Circle,
} from "../../Placeholders/Placeholders"

const SmallStoryStyle = styled.div``

const StoryInfo = styled.div``

const StoryUser = styled.div``

const StoryUserName = styled.div``

const StoryTitle = styled.div``

const StoryImageLink = styled.div``

const SmallStoryNotLoaded = () => {
  return (
    <SmallStoryStyle>
      <StoryInfo>
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
      </StoryInfo>
      <StoryImageLink>
        <Rectangle />
      </StoryImageLink>
    </SmallStoryStyle>
  )
}

export default SmallStoryNotLoaded
