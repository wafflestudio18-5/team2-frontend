import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import Article from "./Article"
import Topic from "./Topic"
import Footer from "./Footer"
import styled from "styled-components"
import Color from "../../Constants/Color"

const MainStyle = styled.div`
  padding-top: 76px;
`

const BottomStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-top: 1px solid ${Color.lightGray};
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 1080px) {
    padding: 0 64px;
  }
  @media (max-width: 1079.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
  }
`

const BottomContents = styled.div`
  box-sizing: border-box;
  max-width: 1192px;
  padding: 0 -16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const BottomLeftSytle = styled.div`
  float: left;
  position: relative;
  box-sizing: border-box;
  width: 60%;
  padding: 0 16px 0 0;
`

const BottomRightStyle = styled.div`
  float: left;
  position: relative;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 0 16px;
`

const Main = ({ TrendingPosts, reachScrollCheckPoint }) => {
  return (
    <MainStyle>
      <Header reachScrollCheckPoint={reachScrollCheckPoint} />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
      <BottomStyle>
        <BottomContents>
          <BottomLeftSytle>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </BottomLeftSytle>
          <BottomRightStyle>
            <Topic />
            <Footer />
          </BottomRightStyle>
        </BottomContents>
      </BottomStyle>
    </MainStyle>
  )
}

export default Main
