import styled from "styled-components"
import Greeting from "./Greeting"
import Logo from "./Logo"
import SmallLogo from "./SmallLogo"
import Search from "./Search"
import UserProfile from "./UserProfile"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"
import default_profile_image from "../../../Images/default_profile_image.png"

const HeaderStyle = styled.nav`
  width: 100%;
  max-width: 1320px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  height: 65px;

  @media (min-width: 904px) {
    padding: 0 64px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
    height: 56px;
    margin: 24px auto;
  }
`

const Header = ({
  user,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
  openDropdown,
}) => {
  let { profile_image } = user
  if (profile_image === "" || profile_image === undefined) {
    profile_image = default_profile_image
  }
  return (
    <HeaderStyle>
      <HeaderLeft>
        <a href="/main">
          <Logo />
          <SmallLogo />
        </a>
        <Greeting />
      </HeaderLeft>
      <HeaderRight>
        <Search
          isSearchboxOpen={isSearchboxOpen}
          onClickSearchButton={onClickSearchButton}
          onChangeSearchbox={onChangeSearchbox}
          search={search}
        />
        <UserProfile profileImage={profile_image} openDropdown={openDropdown} />
      </HeaderRight>
    </HeaderStyle>
  )
}

export default Header
