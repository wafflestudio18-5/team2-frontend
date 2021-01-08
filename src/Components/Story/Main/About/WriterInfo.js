import styled from "styled-components"
import Color from "../../../../Constants/Color"

const WriterInfoBlock = styled.div`
  display: block;
  padding-bottom: 28px;
  border-bottom: 1px solid ${Color.lightGray};
`

const WrittenBy = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.083em;
  line-height: 16px;
  font-size: 12px;
  color: ${Color.gray};
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin: 0;
`

const UserNameBlock = styled.div`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
`

const UserName = styled.a`
  font-weight: 500;
  color: ${Color.black};
  font-size: 16px;
  word-break: break-word;
  letter-spacing: 0;
  line-height: 20px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
`

const UserInfoBlock = styled.div`
  display: block;
  padding-top: 2px;
`

const UserInfo = styled.p`
  color: ${Color.gray};
  line-height: 20px;
  font-size: 14px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
`

const WriterInfo = ({ userinfo }) => {
  return (
    <WriterInfoBlock>
      <WrittenBy>written by</WrittenBy>
      <UserNameBlock>
        <UserName href={userinfo.url}>{userinfo.name}</UserName>
      </UserNameBlock>
      <UserInfoBlock>
        <UserInfo>{userinfo.bio}</UserInfo>
      </UserInfoBlock>
    </WriterInfoBlock>
  )
}

export default WriterInfo;
