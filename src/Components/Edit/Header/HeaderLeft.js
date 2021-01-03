import styled from "styled-components"
import Color from "../../../Constants/Color"
import SaveStatusConstants from "../../../Constants/SaveStatusConstants"

const HeaderLeftStyle = styled.div`
  display: flex;
  align-items: center;
`

const HeaderLogo = styled.a`
  height: 25px;
`

const UserName = styled.p`
  margin-left: 10px;
  font-size: 13px;
  color: ${Color.black};
  font-family: "NotoSans";
`

const Status = styled.span`
  margin-left: 18px;
  font-size: 13px;
  color: ${Color.gray};
  font-family: "NotoSans";
`

const HeaderLeft = ({ userName, status }) => {
  let statusMessage = ""
  switch (status) {
    case SaveStatusConstants.SAVING:
      statusMessage = "saving"
      break

    case SaveStatusConstants.SAVED:
      statusMessage = "saved"
      break

    default:
      break
  }
  return (
    <HeaderLeftStyle>
      <HeaderLogo href="/main">
        <svg height="25px" viewBox="0 0 1043.63 592.71">
          <g>
            <path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36"></path>
            <path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279"></path>
            <path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94"></path>
          </g>
        </svg>
      </HeaderLogo>
      <UserName>{userName}</UserName>
      <Status>{statusMessage}</Status>
    </HeaderLeftStyle>
  )
}

export default HeaderLeft
