import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import Searchbar from "./Searchbar"
import Sidebar from "./Sidebar"

const SearchStyle = styled.div`
  position: relative;
  display: flex;
`

const SearchWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 56px;
  }
`

const SearchResult = styled.div``

const Search = ({
  searchWord,
  user,
  stories,
  people,
  onChangeInput,
  enter,
}) => {
  return (
    <SearchStyle>
      <Header user={user} />
      <SearchWrapper>
        <Searchbar
          searchWord={searchWord}
          onChangeInput={onChangeInput}
          enter={enter}
        />
        <SearchResult>
          <Main stories={stories} people={people} />
          <Sidebar people={people} />
        </SearchResult>
      </SearchWrapper>
    </SearchStyle>
  )
}

export default Search
