import styled from "styled-components"
import Header from "./Header"
import UserDropdown from "./UserDropdown"
import Center from "./Center"
import Trending from "../Main/Trending"
import Article from "../Main/Article"
import Footer from "../Main/Footer"
import {
  BottomStyle,
  BottomWrapper,
  BottomLeftStyle,
  BottomRightStyle,
} from "../Main/Bottom/Bottom"

const MainStyle = styled.div`
  position: relative;
`

const MainLogin = ({
  trendingPosts,
  Articles,
  user,
  centerArticles,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
  signOut,
  isDropdownOpened,
  openDropdown,
  hideDropdown,
  history,
}) => {
  return (
    <MainStyle>
      <Header
        user={user}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
        onChangeSearchbox={onChangeSearchbox}
        search={search}
        openDropdown={openDropdown}
      />
      <Center stories={centerArticles} />
      <Trending trendingPosts={trendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <BottomLeftStyle>
            <Article Articles={Articles} history={history}/>
          </BottomLeftStyle>
          <BottomRightStyle>
            <Footer />
          </BottomRightStyle>
        </BottomWrapper>
      </BottomStyle>
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
    </MainStyle>
  )
}

export default MainLogin
