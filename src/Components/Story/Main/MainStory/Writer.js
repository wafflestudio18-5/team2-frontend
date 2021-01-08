import styled from "styled-components"
import Color from "../../../../Constants/Color"
import changeDate from "../../../../Pages/Main/Functions/changeDate"
import default_profile_image from "../../../../Images/default_profile_image.png"

const WriterWrapper = styled.div`
  margin-top: 32px;
  display: block;
  @media (max-width: 728px) {
    margin-top: 64px;
  }
`
const WriterBlock = styled.div`
  justify-content: space-between;
  display: flex;
  word-break: break;
  flex-direction: row;
`
const WriterLeft = styled.div`
  align-items: center;
  display: flex;
`
const WriterPicture = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: block;
  margin: 0;
  cursor: pointer;
`

const WriterInfoBlock = styled.div`
  margin-left: 12px;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
`

const WriterNameBlock = styled.div`
  display: block;
  flex: 1;
  line-height: 20px;
`

const WriterName = styled.a`
  text-decoration: none;
  color: ${Color.green};
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
`

const DateAndTimeSpan = styled.span`
  line-height: 20px;
`
const DateAndTime = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${Color.gray};
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin: 0;
  cursor: pointer;
`

const Writer = ({ userinfo, storyinfo, history }) => {
  var profileimg
  if (userinfo.profile_image === "") profileimg = default_profile_image
  else profileimg = userinfo.profile_image
  return (
    <WriterWrapper>
      <WriterBlock>
        <WriterLeft>
          <WriterPicture
            src={profileimg}
            onClick={() => {
              history.push("/user/" + userinfo.id)
            }}
          />
          <WriterInfoBlock>
            <WriterNameBlock>
              <WriterName
                onClick={() => {
                  history.push("/user/" + userinfo.id)
                }}
              >
                {userinfo.name}
              </WriterName>
            </WriterNameBlock>
            <DateAndTimeSpan>
              <DateAndTime
                onClick={() => {
                  history.push("/story/" + storyinfo.id)
                }}
              >
                &nbsp;&nbsp;{changeDate(storyinfo.published_at + "")}
              </DateAndTime>
            </DateAndTimeSpan>
          </WriterInfoBlock>
        </WriterLeft>
      </WriterBlock>
    </WriterWrapper>
  )
}

export default Writer
