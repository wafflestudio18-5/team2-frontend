import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import styled from "styled-components"

const MainStyle = styled.div`
  padding-top: 76px;
`

const Main = ({ TrendingPosts }) => {
  return (
    <MainStyle>
      <Header />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
    </MainStyle>
  )
}

export default Main
