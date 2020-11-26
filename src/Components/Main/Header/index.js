import HeaderLogo from "./HeaderLogo"
import { HeaderSignIn, HeaderLink } from "./HeaderSignIn"
import HeaderLinkGroup from "./HeaderLinkGroup"
import HeaderStartButton from "./HeaderStartButton"
import HeaderWrapper from "./HeaderWrapper"
import HeaderContents from "./HeaderContents"
import ModalTypeConstants from "../../../Constants/ModalTypeConstants"

const Header = ({ reachScrollCheckPoint, showModal }) => {
  return (
    <HeaderWrapper reachScrollCheckPoint={reachScrollCheckPoint}>
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
          <HeaderSignIn
            onClick={() => {
              showModal(ModalTypeConstants.LOG_IN)
            }}
          >
            Sign In
          </HeaderSignIn>
          <HeaderStartButton
            reachScrollCheckPoint={reachScrollCheckPoint}
            onClick={() => {
              showModal(ModalTypeConstants.SIGN_UP)
            }}
          >
            Get Started
          </HeaderStartButton>
        </HeaderLinkGroup>
      </HeaderContents>
    </HeaderWrapper>
  )
}

export default Header
