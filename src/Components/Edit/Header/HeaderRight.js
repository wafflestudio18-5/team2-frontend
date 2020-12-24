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

const NotificationButton = styled.button`
  margin-right: 16px;
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

const HeaderRight = ({ profileUrl, publish }) => {
  return (
    <HeaderRightStyle>
      <PublishButton onClick={publish}>Publish</PublishButton>
      <ThreeDotsButton>
        <svg width="25" height="25">
          <path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"></path>
        </svg>
      </ThreeDotsButton>
      <NotificationButton>
        <svg width="25" height="25" viewBox="-293 409 25 25">
          <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
        </svg>
      </NotificationButton>
      <UserProfile profileUrl={profileUrl} />
    </HeaderRightStyle>
  )
}

export default HeaderRight
