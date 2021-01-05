import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"

const UserBlockStyle = styled.div`
  padding-bottom: 18px;
  display: flex;
`

const UserProfile = styled.a``

const UserProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  vertical-align: middle;
`

const UserParagraph = styled.div``

const UserName = styled.a``

const UserDate = styled.p``

const UserBio = styled.p``

const UserBlock = ({ user }) => {
  let { id, name, profile_image } = user
  if (profile_image === "" || profile_image === undefined) {
    profile_image = default_profile_image
  }
  return (
    <UserBlockStyle>
      <UserProfile href={"/user/" + id}>
        <UserProfileImage src={profile_image} />
      </UserProfile>
      <UserParagraph>
        <UserName href={"/user/" + id}>{name}</UserName>
        <UserDate></UserDate>
        <UserBio></UserBio>
      </UserParagraph>
    </UserBlockStyle>
  )
}

export default UserBlock
