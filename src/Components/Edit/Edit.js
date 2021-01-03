import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import HighlightMenu from "./HighlightMenu"
import UserDropdown from "../MainLogin/UserDropdown"
import AddContentButton from "./AddContentButton"

const EditStyle = styled.div`
  padding-top: 65px;
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
      <AddContentButton addDivider={addDivider} />
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
    </EditStyle>
  )
}

export default Edit
