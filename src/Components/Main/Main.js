import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"
import Article from "./Article"
import Footer from "./Footer"
import styled from "styled-components"
import {
  BottomStyle,
  BottomWrapper,
  BottomLeftStyle,
  BottomRightStyle,
} from "./Bottom/Bottom"

const MainStyle = styled.div`
  padding-top: 76px;
`

const Main = ({
  trendingPosts,
  reachScrollCheckPoint,
  showModal,
  Articles,
  Topics,
  history,
}) => {
  return (
    <MainStyle>
      <Header
        reachScrollCheckPoint={reachScrollCheckPoint}
        showModal={showModal}
      />
      <Center showModal={showModal} />
      <Trending trendingPosts={trendingPosts} />
      <BottomStyle>
        <BottomWrapper>
          <BottomLeftStyle>
            <Article Articles={Articles} history={history} />
          </BottomLeftStyle>
          <BottomRightStyle>
            <Footer />
          </BottomRightStyle>
        </BottomWrapper>
      </BottomStyle>
    </MainStyle>
  )
}

export default Main
