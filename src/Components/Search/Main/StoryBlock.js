import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"
import StorySummary from "./StorySummary"
import changeDate from "../../../Pages/Main/Functions/changeDate"
import Color from "../../../Constants/Color"

const StoryBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
  max-width: 600px;
  border-top: ${(props) => !props.first && "1px solid rgba(0, 0, 0, 0.05)"};
`

const UserInfo = styled.div`
  padding-top: 5px;
  margin-bottom: 15px;
  display: flex;
`

const UserProfile = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  border-radius: 50%;
`

const UserParagraph = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans";
  font-size: 16px;
  line-height: 1.4;
`

const Username = styled.a`
  text-decoration: none;
  color: ${Color.green};
  &:hover {
    color: ${Color.hoverGreen};
  }
`

const Date = styled.a`
  text-decoration: none;
  color: ${Color.gray};
  font-size: 13px;
`

const StoryBlock = ({ story, first }) => {
  let { id, name, profile_image } = story.writer
  if (profile_image === "" || profile_image === undefined) {
    profile_image = default_profile_image
  }
  return (
    <StoryBlockStyle first={first}>
      <UserInfo>
        <a href={"/user/" + id}>
          <UserProfile src={profile_image} />
        </a>
        <UserParagraph>
          <Username href={"/user/" + id}>{name}</Username>
          <Date href={"/story/" + story.id}>
            {changeDate(story.published_at)}
          </Date>
        </UserParagraph>
      </UserInfo>
      <StorySummary story={story} />
    </StoryBlockStyle>
  )
}

export default StoryBlock
