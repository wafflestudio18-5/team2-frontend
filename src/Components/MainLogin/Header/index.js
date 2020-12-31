import styled from "styled-components"
import Greeting from "./Greeting"
import Logo from "./Logo"
import Search from "./Search"
import UserDropdown from "./UserDropdown"
import UserProfile from "./UserProfile"

const HeaderStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  height: 65px;
`

const Header = ({ user }) => {
  return (
    <HeaderStyle>
      <Logo />
      <Greeting />
      <Search />
      <UserProfile />
      <UserDropdown />
    </HeaderStyle>
  )
}

export default Header
