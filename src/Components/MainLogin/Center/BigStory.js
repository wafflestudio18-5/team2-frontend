import styled from "styled-components"
import default_featured_image from "../../../Images/default_featured_image.jpeg"
import default_profile_image from "../../../Images/default_profile_image.png"
import Color from "../../../Constants/Color"

const BigStoryStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StoryImageLink = styled.a`
  margin: 0;
  padding: 0;
  cursor: pointer;
`

const StoryImage = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`

const StoryUser = styled.div`
  margin-top: 16px;
  display: block;
`

const StoryUserImage = styled.img`
  border-radius: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  vertical-align: middle;
`

const StoryUserName = styled.a`
  margin-left: 8px;
  padding: 0;
  font-weight: 500;
  color: ${Color.black};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
`

const StoryTitle = styled.a`
  margin-top: 8px;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
`

const StorySubtitle = styled.a`
  width: 100%;
  font-family: "Lora";
  letter-spacing: -0.003em;
  max-height: 84px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${Color.borderBlack};
  line-height: 28px;
  cursor: pointer;
`

const StoryDate = styled.p`
  margin-top: 16px;
  color: ${Color.gray};
  font-size: 13px;
  line-height: 20px;
`

const BigStory = ({ user, story }) => {
  let profile_image = user.profile_image
  let featured_image = story.featured_image
  if (profile_image === "") {
    profile_image = default_profile_image
  }
  if (featured_image === undefined) {
    featured_image = default_featured_image
  }
  return (
    <BigStoryStyle>
      <StoryImageLink>
        <StoryImage src={featured_image} />
      </StoryImageLink>
      <StoryUser>
        <a>
          <StoryUserImage src={profile_image} />
        </a>
        <StoryUserName>{user.username}</StoryUserName>
      </StoryUser>
      <StoryTitle>{story.title}</StoryTitle>
      <StorySubtitle>{story.subtitle}</StorySubtitle>
      <StoryDate>{story.created_at}</StoryDate>
    </BigStoryStyle>
  )
}

export default BigStory
