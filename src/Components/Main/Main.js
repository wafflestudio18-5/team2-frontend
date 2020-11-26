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
    padding: 56px 64px 0px;
  }
  @media (max-width: 1079.98px) and (min-width: 728px) {
    padding: 56px 48px 0px;
  }
  @media (max-width: 727.98px) {
    padding: 56px 24px 0px;
  }
`

const BottomWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1192px;
  padding: 0 -16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const BottomRightStyle = styled.div`
  float: left;
  position: relative;
  top: 0;
  height: 100%;
  width: 40%;
  margin-right: -16px;
  box-sizing: border-box;
`

const Main = ({ TrendingPosts, reachScrollCheckPoint }) => {
  return (
    <MainStyle>
      <Header reachScrollCheckPoint={reachScrollCheckPoint} />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <Article />
          <BottomRightStyle>
            <Topic />
            <Footer />
          </BottomRightStyle>
        </BottomWrapper>
      </BottomStyle>
    </MainStyle>
  )
}

export default Main
