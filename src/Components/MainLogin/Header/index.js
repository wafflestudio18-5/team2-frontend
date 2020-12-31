import styled from "styled-components"
import Greeting from "./Greeting"
import Logo from "./Logo"
import Search from "./Search"
import UserDropdown from "./UserDropdown"
import UserProfile from "./UserProfile"

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
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
