import styled from "styled-components"
import Color from "../../../Constants/Color"

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 40px;
`

const HeaderMessage = styled.h1`
  line-height: 52px;
  font-size: 42px;
  font-family: "Noto Sans";
  color: ${Color.borderBlack};
  margin: 0;
`

const HeaderLink = styled.a`
  text-decoration: none;
  border: 1px solid ${Color.green};
  color: ${Color.green};
  padding: 9px 16px 7px;
  font-family: "Noto Sans";
  border-radius: 4px;

  &:hover {
    border-color: ${Color.hoverGreen};
    color: ${Color.hoverGreen};
  }
`

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderMessage>Your stories</HeaderMessage>
      <HeaderLink href="/edit">Write a story</HeaderLink>
    </HeaderWrapper>
  )
}

export default MainHeader
