import styled from "styled-components"
import Header from "../Story/Header"
import UserDropdown from "../MainLogin/UserDropdown"
import Footer from "../Story/Main/Footer"
import Main from "./Main"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const MainWrapper = styled.div`
  flex: 1 0 auto;
`

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
      <MainWrapper>
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
      </MainWrapper>
      {isDropdownOpened && (
        <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />
      )}
      <Footer />
    </Wrapper>
  )
}

export default UserAbout
