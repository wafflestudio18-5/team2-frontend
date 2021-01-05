import styled from "styled-components"
import Main from "../Main"

const DivStyle = styled.div`
  display: block;
`

const SearchUser = ({ people }) => {
  return (
    <DivStyle>
      <Main people={people} type="user" />
    </DivStyle>
  )
}

export default SearchUser
