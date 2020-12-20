import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

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
    </EditStyle>
  )
}

export default Edit
