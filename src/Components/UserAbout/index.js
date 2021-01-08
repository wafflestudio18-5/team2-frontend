import styled from "styled-components"
import Header from "../Story/Header"
import UserDropdown from "../MainLogin/UserDropdown"

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
      {isDropdownOpened && (
        <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />
      )}
    </Wrapper>
  )
}

export default UserAbout
