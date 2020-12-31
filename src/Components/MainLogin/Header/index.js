import styled from "styled-components"
import Greeting from "./Greeting"
import Logo from "./Logo"
import Search from "./Search"
import UserDropdown from "./UserDropdown"
import UserProfile from "./UserProfile"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 64px;
  height: 65px;

  @media (max-width: 727.98px) {
    height: 56px;
    margin: 24px 24px;
  }
`

const Header = ({ user }) => {
  return (
    <HeaderStyle>
      <HeaderLeft>
        <Logo />
        <Greeting />
      </HeaderLeft>
      <HeaderRight>
        <Search />
        <UserProfile profileImage={user.profileImage} />
        <UserDropdown user={user} />
      </HeaderRight>
    </HeaderStyle>
  )
}

export default Header
