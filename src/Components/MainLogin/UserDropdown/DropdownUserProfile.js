import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"
import Color from "../../../Constants/Color"

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 20px;
`

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
`

const Names = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`

const Fullname = styled.a`
  text-decoration: none;
  font-family: "Noto Sans";
  color: ${Color.borderBlack};
  line-height: 20px;
`

const Username = styled.a`
  text-decoration: none;
  font-family: "Noto Sans";
  color: ${Color.gray};
  line-height: 20px;

  &:hover {
    text-decoration: underline;
  }
`

const DropdownUserProfile = ({ user }) => {
  let { id, name, username, profileImage } = user
  if (profileImage === "" || profileImage === undefined) {
    profileImage = default_profile_image
  }

  return (
    <ProfileStyle>
      <a href={"/user/" + id}>
        <ProfileImage src={profileImage} />
      </a>
      <Names>
        <Fullname href={"/user/" + id}>{name}</Fullname>
        <Username href={"/user/" + id}>{"@" + username}</Username>
      </Names>
    </ProfileStyle>
  )
}

export default DropdownUserProfile
