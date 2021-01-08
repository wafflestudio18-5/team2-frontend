import styled from "styled-components"

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
  return (
    <ButtonStyle id="userProfile" onClick={openDropdown}>
      <ProfileImage src={profileImage} />
    </ButtonStyle>
  )
}

export default UserProfile
