import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

const EditStyle = styled.div`
  padding-top: 65px;
`

const Edit = ({ user, status, story, change, publish, createNewContent }) => {
  return (
    <EditStyle>
      <Header user={user} status={status} publish={publish} />
      <Main story={story} change={change} createNewContent={createNewContent} />
    </EditStyle>
  )
}

export default Edit
