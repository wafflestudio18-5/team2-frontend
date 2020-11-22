import styled from "styled-components"
import Color from "../../../Constants/Color"
import HeaderLogo from "./HeaderLogo"
import { HeaderSignIn, HeaderLink } from "./HeaderSignIn"
import HeaderLinkGroup from "./HeaderLinkGroup"
import HeaderStartButton from "./HeaderStartButton"

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
  align-content: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContents>
        <a href="/main/">
          <HeaderLogo />
        </a>
        <HeaderLinkGroup>
          <HeaderLink href="https://about.medium.com/">Our Story</HeaderLink>
          <HeaderLink href="https://about.medium.com/membership/">
            Membership
          </HeaderLink>
          <HeaderLink href="https://about.medium.com/creators/">
            Write
          </HeaderLink>
          <HeaderSignIn>Sign In</HeaderSignIn>
          <HeaderStartButton>Get Started</HeaderStartButton>
        </HeaderLinkGroup>
      </HeaderContents>
    </HeaderWrapper>
  )
}

export default Header
