import HeaderLogo from "./HeaderLogo"
import { HeaderSignIn, HeaderLink } from "./HeaderSignIn"
import HeaderLinkGroup from "./HeaderLinkGroup"
import HeaderStartButton from "./HeaderStartButton"
import HeaderWrapper from "./HeaderWrapper"
import HeaderContents from "./HeaderContents"

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
