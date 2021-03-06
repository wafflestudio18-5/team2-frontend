import styled from "styled-components"
import Header from "./Header"
import Searchbar from "./Searchbar"
import UserDropdown from "../MainLogin/UserDropdown"
import SearchStory from "./SearchStory"
import SearchUser from "./SearchUser"
import MainButtons from "./MainButtons"

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

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Search = ({
  type,
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
          <ResultWrapper>
            <MainButtons type={type} searchWord={searchWord} />
            {type === "story" && (
              <SearchStory stories={stories} people={people} />
            )}
            {type === "user" && <SearchUser people={people} />}
          </ResultWrapper>
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
