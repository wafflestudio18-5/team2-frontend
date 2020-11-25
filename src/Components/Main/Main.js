import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import Article from "./Article"
import Topic from "./Topic"
import Footer from "./Footer"
import styled from "styled-components"

const MainStyle = styled.div`
  padding-top: 76px;
`

const Main = ({ TrendingPosts, reachScrollCheckPoint }) => {
  return (
    <MainStyle>
      <Header reachScrollCheckPoint={reachScrollCheckPoint} />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
      <Article />
      <Topic />
      <Footer />
    </MainStyle>
  )
}

export default Main
