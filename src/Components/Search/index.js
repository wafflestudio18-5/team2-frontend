import styled from "styled-components"
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import Searchbar from "./Searchbar"
import UserDropdown from "../MainLogin/UserDropdown"
import SearchUser from "./SearchUser"
import SearchStory from "./SearchStory"

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

const Search = ({
  searchWord,
  user,
  stories,
  people,
  onChangeInput,
  enter,
  signOut,
  isDropdownOpened,
  openDropdown,
  hideDropdown,
  showModal,
}) => {
  return (
    <SearchStyle>
      <Header user={user} openDropdown={openDropdown} showModal={showModal} />
      <SearchWrapper>
        <Searchbar
          searchWord={searchWord}
          onChangeInput={onChangeInput}
          enter={enter}
        />
        {searchWord !== "" && searchWord !== undefined && (
          <Switch>
            <Route exact path="/search/users" component={SearchUser} />
            <Route exact path="/search" component={SearchStory} />
          </Switch>
        )}
      </SearchWrapper>
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
    </SearchStyle>
  )
}

export default Search
