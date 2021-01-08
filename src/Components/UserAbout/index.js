import styled from "styled-components"
import Header from "../Story/Header"
import UserDropdown from "../MainLogin/UserDropdown"
import Footer from "../Story/Main/Footer"
import Main from "./Main"

const Wrapper = styled.div``

const UserAbout = ({
  showModal,
  userinfo,
  logged_in,
  me,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
  openDropdown,
  signOut,
  isDropdownOpened,
  hideDropdown,
}) => {
  return (
    <Wrapper>
      <Header
        showModal={showModal}
        userinfo={userinfo}
        logged_in={logged_in}
        me={me}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
        onChangeSearchbox={onChangeSearchbox}
        search={search}
        openDropdown={openDropdown}
      />
      <Main user={userinfo} />
      {isDropdownOpened && (
        <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />
      )}
      <Footer />
    </Wrapper>
  )
}

export default UserAbout
