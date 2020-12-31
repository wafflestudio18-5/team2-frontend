import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"
import styled from "styled-components"

const DivStyle = styled.div`
  display: flex;
  align-items: center;
`

const Search = () => {
  return (
    <DivStyle>
      <SearchButton />
      <SearchInput placeholder="Search Wadium" />
    </DivStyle>
  )
}

export default Search
