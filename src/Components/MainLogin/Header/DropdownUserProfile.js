import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"

const ProfileStyle = styled.div``

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
`

const Names = styled.div``

const Fullname = styled.p``

const Username = styled.p``

const DropdownUserProfile = ({ user }) => {
  let { id, name, username, profileImage } = user
  if (profileImage === "") {
    profileImage = default_profile_image
  }

  return (
    <ProfileStyle>
      <a href={"/user/" + id}>
        <ProfileImage src={profileImage} />
      </a>
      <Names>
        <Fullname>{name}</Fullname>
        <Username>{"@" + username}</Username>
      </Names>
    </ProfileStyle>
  )
}

export default DropdownUserProfile
