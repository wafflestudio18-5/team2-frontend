import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"
import getDate from "../../../Pages/Search/Functions/getDate"

const MainStyle = styled.div``
const UserInfo = styled.div``
const Username = styled.h4``
const UserBio = styled.p``
const Date = styled.p``
const UserPhoto = styled.img``

const Main = ({ user }) => {
  let { name, bio, created_at, profile_image } = user
  if (profile_image === undefined || profile_image === "") {
    profile_image = default_profile_image
  }
  return (
    <MainStyle>
      <UserInfo>
        <Username>{"About " + name}</Username>
        <UserBio>{bio}</UserBio>
        <Date>{getDate(created_at)}</Date>
      </UserInfo>
      <UserPhoto src={profile_image} />
    </MainStyle>
  )
}

export default Main
