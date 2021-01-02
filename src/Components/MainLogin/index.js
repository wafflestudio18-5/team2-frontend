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
  TrendingPosts,
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
      <Trending trendingPosts={TrendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <BottomLeftStyle>
            <Article Articles={Articles} />
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
