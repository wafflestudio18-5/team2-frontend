import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import HighlightMenu from "./HighlightMenu"
import UserDropdown from "../MainLogin/UserDropdown"
import AddContentButton from "./AddContentButton"
import ImageUrlInput from "./ImageUrlInput"

const EditStyle = styled.div`
  padding-top: 65px;
  display: relative;
`

const Edit = ({
  user,
  status,
  story,
  publish,
  changeStateOnInput,
  keyDownEventListener,
  checkMultiLineSelected,
  buttonFunctions,
  signOut,
  isDropdownOpened,
  openDropdown,
  hideDropdown,
  startTimer,
  addDivider,
  addImage,
  showImageUrlInput,
  onChangeUrl,
  createImage,
  hideInput,
}) => {
  return (
    <EditStyle>
      <Header
        user={user}
        status={status}
        publish={publish}
        openDropdown={openDropdown}
      />
      <Main
        story={story}
        changeStateOnInput={changeStateOnInput}
        keyDownEventListener={keyDownEventListener}
        checkMultiLineSelected={checkMultiLineSelected}
        startTimer={startTimer}
      />
      <HighlightMenu buttonFunctions={buttonFunctions} />
      <AddContentButton addDivider={addDivider} addImage={addImage} />
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
      {showImageUrlInput && (
        <ImageUrlInput
          onChangeUrl={onChangeUrl}
          createImage={createImage}
          hideInput={hideInput}
        />
      )}
    </EditStyle>
  )
}

export default Edit
