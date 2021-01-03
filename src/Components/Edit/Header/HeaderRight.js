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

const ThreeDotsButton = styled.button`
  margin-right: 8px;
  width: 37px;
  padding: 0;
  background: 0;
  border: 0;
  cursor: pointer;
  fill: rgba(0, 0, 0, 0.54);

  :hover {
    fill: rgba(0, 0, 0, 0.84);
  }

  :focus {
    outline: 0;
  }
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
      <ThreeDotsButton>
        <svg width="25" height="25">
          <path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"></path>
        </svg>
      </ThreeDotsButton>
      <UserProfile
        id="userProfile"
        profileUrl={profileUrl}
        onClick={openDropdown}
      />
    </HeaderRightStyle>
  )
}

export default HeaderRight
