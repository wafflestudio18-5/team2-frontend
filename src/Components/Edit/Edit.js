import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

const EditStyle = styled.div`
  padding-top: 65px;
`

const Edit = ({ user, status }) => {
  return (
    <EditStyle>
      <Header user={user} status={status} />
      <Main />
    </EditStyle>
  )
}

export default Edit
