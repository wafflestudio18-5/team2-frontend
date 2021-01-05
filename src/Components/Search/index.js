import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import Searchbar from "./Searchbar"
import Sidebar from "./Sidebar"

const SearchStyle = styled.div``

const SearchResult = styled.div``

const Search = () => {
  return (
    <SearchStyle>
      <Header />
      <Searchbar />
      <SearchResult>
        <Main />
        <Sidebar />
      </SearchResult>
    </SearchStyle>
  )
}

export default Search
