import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import Article from "./Article"
import Topic from "./Topic"
import Footer from "./Footer"
import styled from "styled-components"
import {BottomStyle, BottomWrapper, BottomLeftStyle, BottomRightStyle} from "./Bottom/Bottom"

const MainStyle = styled.div`
  padding-top: 76px;
`

const Main = ({ TrendingPosts, reachScrollCheckPoint, Articles, Topics}) => {
  return (
    <MainStyle>
      <Header reachScrollCheckPoint={reachScrollCheckPoint} />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <BottomLeftStyle>
            <Article Articles={Articles}/>
          </BottomLeftStyle>
          <BottomRightStyle>
            <Topic Topics={Topics}/>
            <Footer />
          </BottomRightStyle>
        </BottomWrapper>
      </BottomStyle>
    </MainStyle>
  )
}

export default Main
