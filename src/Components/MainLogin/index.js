import styled from "styled-components"
import Header from "./Header"
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

const MainStyle = styled.div``

const MainLogin = ({
  TrendingPosts,
  Articles,
  user,
  centerArticles,
  isSearchboxOpen,
  onClickSearchButton,
}) => {
  return (
    <MainStyle>
      <Header
        user={user}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
      />
      <Center centerArticles={centerArticles} />
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
    </MainStyle>
  )
}

export default MainLogin
