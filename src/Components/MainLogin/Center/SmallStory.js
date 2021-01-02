import styled from "styled-components"

const SmallStoryStyle = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex: 1 1 auto;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
`

const StoryInfo = styled.div``

const StoryUser = styled.a``

const StoryUserImage = styled.img``

const StoryUserName = styled.p``

const StoryTitle = styled.a``

const StoryDate = styled.p``

const StoryImageLink = styled.a``

const StoryImage = styled.img``

const SmallStory = ({ user, story }) => {
  return (
    <SmallStoryStyle>
      <StoryInfo>
        <StoryUser>
          <StoryUserImage src={user.profile_image} />
          <StoryUserName>{user.username}</StoryUserName>
        </StoryUser>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryDate>{story.created_at}</StoryDate>
      </StoryInfo>
      <StoryImageLink>
        <StoryImage src={story.featured_image} />
      </StoryImageLink>
    </SmallStoryStyle>
  )
}

export default SmallStory
