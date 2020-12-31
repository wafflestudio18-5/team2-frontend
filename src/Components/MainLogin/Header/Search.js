import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"
import styled from "styled-components"

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 8px;
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
