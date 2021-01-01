import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"

const ButtonStyle = styled.button`
  margin: 0;
  padding: 0;
  background: 0;
  border: 0;
  cursor: pointer;
`

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
`

const UserProfile = ({ profileImage, openDropdown }) => {
  let profileImageUrl = profileImage
  if (profileImage === "") {
    profileImageUrl = default_profile_image
  }
  return (
    <ButtonStyle onClick={openDropdown}>
      <ProfileImage src={profileImageUrl} />
    </ButtonStyle>
  )
}

export default UserProfile
