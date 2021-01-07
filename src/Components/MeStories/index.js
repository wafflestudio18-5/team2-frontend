import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import ActionButton from "./ActionButton"
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
  openActionButton,
  closeActionButton,
  isActionButtonOpen,
  deleteStory,
  selectedStoryId,
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
      <Main stories={stories} type={type} openActionButton={openActionButton} />
      <ActionButton
        closeActionButton={closeActionButton}
        deleteStory={deleteStory}
        selectedStoryId={selectedStoryId}
        type={type}
        isActionButtonOpen={isActionButtonOpen}
      />
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
