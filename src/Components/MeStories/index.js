import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import UserDropdown from "../MainLogin/UserDropdown"

const MeStoriesStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const MeStories = ({
  user,
  isDropdownOpened,
  openDropdown,
  hideDropdown,
  signOut,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
  stories,
  type,
}) => {
  return (
    <MeStoriesStyle>
      <Header
        user={user}
        openDropdown={openDropdown}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
        onChangeSearchbox={onChangeSearchbox}
        search={search}
      />
      <Main stories={stories} type={type} />
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
    </MeStoriesStyle>
  )
}

export default MeStories
