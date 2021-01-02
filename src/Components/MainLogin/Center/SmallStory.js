import styled from "styled-components"
import default_featured_image from "../../../Images/default_featured_image.png"
import default_profile_image from "../../../Images/default_profile_image.png"

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
  let profile_image = user.profile_image
  let featured_image = story.featured_image
  if (profile_image === "") {
    profile_image = default_profile_image
  }
  if (featured_image === "") {
    featured_image = default_featured_image
  }
  return (
    <SmallStoryStyle>
      <StoryInfo>
        <StoryUser>
          <StoryUserImage src={profile_image} />
          <StoryUserName>{user.username}</StoryUserName>
        </StoryUser>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryDate>{story.created_at}</StoryDate>
      </StoryInfo>
      <StoryImageLink>
        <StoryImage src={featured_image} />
      </StoryImageLink>
    </SmallStoryStyle>
  )
}

export default SmallStory
