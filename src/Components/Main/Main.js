import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import Article from "./Article"
import Topic from "./Topic"
import Footer from "./Footer"
import styled, { css } from "styled-components"
import Color from "../../Constants/Color"

const MainStyle = styled.div`
  padding-top: 76px;
`

const BottomStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  border-top: 1px solid ${Color.lightGray};
  align-items: center;
  box-sizing: border-box;
  overflow: visible;
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
  display: flex;
  box-sizing: border-box;
  max-width: 1192px;
  padding: 0 -16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: visible;
`

const BottomLeftStyle = styled.div`
  box-sizing: border-box;
  width: 62%;
  flex-basis: 62%;
  padding-right: 50px;
  margin-right: 0;
`
const BottomRightStyle = styled.div`
  width: 38%;
  flex-basis: 38%;
  box-sizing: border-box;
  padding-left: 50px;
  margin-left: 0;
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  top: 107px;
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
