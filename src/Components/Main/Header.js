import styled from "styled-components"
import Color from "../../Constants/Color"

const HeaderWrapper = styled.div`
  background: ${Color.yellow};
  width: 100%;
  height: 76px;
  position: fixed;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${Color.black};

  @media (min-width: 904px) {
    padding: 0 64px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
  }
`

const HeaderContents = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1192px;
  box-sizing: border-box;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.div``

const HeaderLinkGroup = styled.div``

const HeaderSignIn = styled.a`
  margin-right: 25px;
  color: ${Color.borderBlack};
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`

const HeaderLink = styled(HeaderSignIn)`
  @media (max-width: 727.98px) {
    display: none;
  }
`

const HeaderStartButton = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  width: 105.5px;
  height: 38px;
  border: 0;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContents>
        <HeaderLogo>Medium</HeaderLogo>
        <HeaderLinkGroup>
          <HeaderLink>Our Story</HeaderLink>
          <HeaderLink>Membership</HeaderLink>
          <HeaderLink>Write</HeaderLink>
          <HeaderSignIn>Sign In</HeaderSignIn>
          <HeaderStartButton>Get Started</HeaderStartButton>
        </HeaderLinkGroup>
      </HeaderContents>
    </HeaderWrapper>
  )
}

export default Header
