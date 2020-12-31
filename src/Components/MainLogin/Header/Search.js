import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"
import styled from "styled-components"

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 8px;
`

const Search = ({
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
}) => {
  return (
    <DivStyle>
      <SearchButton onClickSearchButton={onClickSearchButton} />
      <SearchInput
        id="Searchbox"
        placeholder="Search Wadium"
        isSearchboxOpen={isSearchboxOpen}
        onChange={onChangeSearchbox}
        onKeyPress={search}
      />
    </DivStyle>
  )
}

export default Search
