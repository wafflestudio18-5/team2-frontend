import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import HighlightMenu from "./HighlightMenu"

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
}) => {
  return (
    <EditStyle>
      <Header user={user} status={status} publish={publish} />
      <Main
        story={story}
        changeStateOnInput={changeStateOnInput}
        keyDownEventListener={keyDownEventListener}
        checkMultiLineSelected={checkMultiLineSelected}
      />
      <HighlightMenu buttonFunctions={buttonFunctions} story={story} />
    </EditStyle>
  )
}

export default Edit
