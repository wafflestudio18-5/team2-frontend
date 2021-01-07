import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import ActionButton from "./ActionButton"
import UserDropdown from "../MainLogin/UserDropdown"
import ConfirmModal from "./ConfirmModal"

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
  startEdit,
  showConfirmModal,
  openConfirmModal,
  hideConfirmModal,
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
        openConfirmModal={openConfirmModal}
        selectedStoryId={selectedStoryId}
        type={type}
        isActionButtonOpen={isActionButtonOpen}
        startEdit={startEdit}
      />
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          deleteStory={deleteStory}
          hideConfirmModal={hideConfirmModal}
        />
      )}
    </MeStoriesStyle>
  )
}

export default MeStories
