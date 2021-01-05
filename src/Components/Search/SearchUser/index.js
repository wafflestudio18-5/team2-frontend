import styled from "styled-components"
import Main from "../Main"

const DivStyle = styled.div``

const SearchUser = ({ people }) => {
  return (
    <DivStyle>
      <Main people={people} type="user" />
    </DivStyle>
  )
}

export default SearchUser
