import styled from "styled-components"
import Color from "../../../Constants/Color"
import default_profile_image from "../../../Images/default_profile_image.png"

const Wrapper = styled.div`
  display: flex;
  padding-top: ${(props) => props.first && "18px"};
  padding-bottom: 18px;
`

const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  vertical-align: middle;
`

const Info = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`

const Name = styled.a`
  color: ${Color.black};
  text-decoration: none;
  font-size: 21px;
  line-height: 24px;
  font-weight: 700;
  font-family: "Noto Sans";

  &:hover {
    color: ${Color.hoverGreen};
  }
`

const Date = styled.p`
  margin: 0;
  margin-bottom: 7px;
  color: ${Color.gray};
  font-size: 15px;
  line-height: 20px;
  font-family: "Noto Sans";
`

const Bio = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 15px;
  line-height: 20px;
  font-family: "Noto Sans";
  color: ${Color.black};
`

const People = ({ person, first }) => {
  let { id, name, bio, created_at, profile_image } = person
  if (profile_image === "" || profile_image === undefined) {
    profile_image = default_profile_image
  }
  return (
    <Wrapper first={first}>
      <a href={"/user/" + id}>
        <Profile src={profile_image} />
      </a>
      <Info>
        <Name href={"/user/" + id}>{name}</Name>
        {created_at && <Date>{created_at}</Date>}
        {bio && <Bio>{bio}</Bio>}
      </Info>
    </Wrapper>
  )
}

export default People
