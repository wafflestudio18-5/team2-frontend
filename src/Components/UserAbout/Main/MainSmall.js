import styled from "styled-components"
import default_profile_image from "../../../Images/default_profile_image.png"
import getDate from "../../../Pages/Search/Functions/getDate"
import Color from "../../../Constants/Color"

const MainStyle = styled.div`
  padding-bottom: 140px;
  margin-top: 40px;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  @media (min-width: 728px) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 100%;
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const UserInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 40px;
`
const Username = styled.h2`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  color: ${Color.borderBlack};
`
const UserBio = styled.p`
  font-family: "Lora";
  line-height: 32px;
  font-size: 21px;
  margin: 0;
  color: ${Color.borderBlack};
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  margin-bottom: 32px;
`
const Date = styled.p`
  font-family: "Noto Sans";
  color: ${Color.gray};
  line-height: 24px;
  font-size: 17px;
`

const UserPhoto = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 40px;
`

const MainBig = ({ user }) => {
  let { name, bio, created_at, profile_image } = user
  if (profile_image === undefined || profile_image === "") {
    profile_image = default_profile_image
  }
  return (
    <MainStyle>
      <Wrapper>
        <UserPhoto src={profile_image} />
        <UserInfo>
          <Username>{"About " + name}</Username>
          <UserBio>{bio}</UserBio>
          <Date>{getDate(created_at)}</Date>
        </UserInfo>
      </Wrapper>
    </MainStyle>
  )
}

export default MainBig
