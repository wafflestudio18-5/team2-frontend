import Trending from "../Main/Trending"
import Article from "../Main/Article"
import Topic from "../Main/Topic"
import Footer from "../Main/Footer"
import styled from "styled-components"
import {
  BottomStyle,
  BottomWrapper,
  BottomLeftStyle,
  BottomRightStyle,
} from "../Main/Bottom/Bottom"

const MainStyle = styled.div``

const MainLogin = ({ TrendingPosts, Articles, Topics }) => {
  return (
    <MainStyle>
      <Trending trendingPosts={TrendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <BottomLeftStyle>
            <Article Articles={Articles} />
          </BottomLeftStyle>
          <BottomRightStyle>
            <Topic Topics={Topics} />
            <Footer />
          </BottomRightStyle>
        </BottomWrapper>
      </BottomStyle>
    </MainStyle>
  )
}

export default MainLogin
