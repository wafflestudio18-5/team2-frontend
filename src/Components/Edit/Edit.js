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
  change,
  publish,
  keyPressEventListener,
}) => {
  return (
    <EditStyle>
      <Header user={user} status={status} publish={publish} />
      <Main
        story={story}
        change={change}
        keyPressEventListener={keyPressEventListener}
      />
    </EditStyle>
  )
}

export default Edit
