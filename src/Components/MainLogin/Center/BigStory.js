import styled from "styled-components"
import default_featured_image from "../../../Images/default_featured_image.png"
import default_profile_image from "../../../Images/default_profile_image.png"

const BigStoryStyle = styled.div``

const StoryImageLink = styled.a``

const StoryImage = styled.img``

const StoryInfo = styled.div``

const StoryUser = styled.a``

const StoryUserImage = styled.img``

const StoryUserName = styled.p``

const StoryTitle = styled.a``

const StoryDate = styled.p``

const BigStory = ({ user, story }) => {
  let profile_image = user.profile_image
  let featured_image = story.featured_image
  if (profile_image === "") {
    profile_image = default_profile_image
  }
  if (featured_image === "") {
    featured_image = default_featured_image
  }
  return (
    <BigStoryStyle>
      <StoryImageLink>
        <StoryImage src={featured_image} />
      </StoryImageLink>
      <StoryInfo>
        <StoryUser>
          <StoryUserImage src={profile_image} />
          <StoryUserName>{user.username}</StoryUserName>
        </StoryUser>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryDate>{story.created_at}</StoryDate>
      </StoryInfo>
    </BigStoryStyle>
  )
}

export default BigStory
