import styled from "styled-components"
import Color from "../../../Constants/Color"
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

const StoryInfo = styled.div`
  margin-right: 20px;
  width: 100%;
`

const StoryUser = styled.div`
  padding-bottom: 8px;
  display: flex;
  align-items: center;
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
  font-size: 16px;
  cursor: pointer;
`

const StoryDate = styled.p`
  margin-top: 16px;
  color: ${Color.gray};
  font-size: 13px;
  line-height: 20px;
`

const StoryImageLink = styled.a``

const StoryImage = styled.img`
  width: 100px;
  height: 100px;
`

const SmallStory = ({ user, story }) => {
  let profile_image = user.profile_image
  let featured_image = story.featured_image
  if (profile_image === "") {
    profile_image = default_profile_image
  }
  if (featured_image === undefined) {
    featured_image = default_featured_image
  }
  return (
    <SmallStoryStyle>
      <StoryInfo>
        <StoryUser>
          <a>
            <StoryUserImage src={profile_image} />
          </a>
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
