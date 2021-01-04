import styled from "styled-components"
import SmallStoryNotLoaded from "./SmallStoryNotLoaded"
import Color from "../../../Constants/Color"
import default_featured_image from "../../../Images/default_featured_image.jpeg"
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
  letter-spacing: -0.03em;
  line-height: 20px;
  text-decoration: none;
  color: ${Color.black};
`

const StoryDate = styled.p`
  margin-top: 8px;
  color: ${Color.gray};
  font-size: 13px;
  line-height: 20px;
`

const StoryImageLink = styled.a``

const StoryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`

const SmallStory = ({ story }) => {
  if (story === undefined) {
    return <SmallStoryNotLoaded />
  }
  const writer = story.writer
  let profile_image = writer.profile_image
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
          <a href={"/user/" + writer.id}>
            <StoryUserImage src={profile_image} />
          </a>
          <StoryUserName href={"/user/" + writer.id}>
            {writer.username}
          </StoryUserName>
        </StoryUser>
        <StoryTitle href={"/story/" + story.id}>{story.title}</StoryTitle>
        <StoryDate>{story.created_at}</StoryDate>
      </StoryInfo>
      <StoryImageLink href={"/story/" + story.id}>
        <StoryImage src={featured_image} />
      </StoryImageLink>
    </SmallStoryStyle>
  )
}

export default SmallStory
