import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"
import Color from "../../../Constants/Color"
import getDate from "../../../Pages/Search/Functions/getDate"

const UserBlockStyle = styled.div`
  padding-bottom: 18px;
  padding-top: ${(props) => !props.first && "18px"};
  display: flex;
  border-top: ${(props) => !props.first && "1px solid rgba(0, 0, 0, 0.05)"};
`

const UserProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  vertical-align: middle;
`

const UserParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  vertical-align: middle;
  font-family: "Noto Sans";
  color: ${Color.black};
`

const UserName = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 19px;
  line-height: 24px;
  font-weight: bold;
  vertical-align: middle;
  margin-bottom: 4px;
`

const UserDate = styled.p`
  margin: 0;
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
  line-height: 20px;
`

const UserBio = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: inherit;
  font-size: 15px;
  line-height: 20px;
`

const UserBlock = ({ user, first }) => {
  let { id, name, profile_image, bio, created_at } = user
  if (profile_image === "" || profile_image === undefined) {
    profile_image = default_profile_image
  }
  return (
    <UserBlockStyle first={first}>
      <a href={"/user/" + id}>
        <UserProfileImage src={profile_image} />
      </a>
      <UserParagraph>
        <UserName href={"/user/" + id}>{name}</UserName>
        {created_at && <UserDate>{getDate(created_at)}</UserDate>}
        {bio && <UserBio>{bio}</UserBio>}
      </UserParagraph>
    </UserBlockStyle>
  )
}

export default UserBlock
