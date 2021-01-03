import styled from "styled-components"
import Color from "../../../Constants/Color"

const HeaderRightStyle = styled.div`
  display: flex;
  align-items: center;
`

const PublishButton = styled.button`
  margin-right: 16px;
  font-size: 13px;
  height: 25px;
  line-height: 25px;
  padding: 0 9px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-family: "NotoSans";
  color: white;
  background-color: ${Color.green};
`

const UserProfile = styled.button`
  padding: 0;
  border: 0;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-image: url(${(props) => props.profileUrl});
  cursor: pointer;
  :focus {
    outline: 0;
  }
`

const HeaderRight = ({ profileUrl, publish, openDropdown }) => {
  return (
    <HeaderRightStyle>
      <PublishButton onClick={publish}>Publish</PublishButton>
      <UserProfile
        id="userProfile"
        profileUrl={profileUrl}
        onClick={openDropdown}
      />
    </HeaderRightStyle>
  )
}

export default HeaderRight
