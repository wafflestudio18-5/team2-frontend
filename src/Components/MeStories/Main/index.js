import styled from "styled-components"
import MainHeader from "./MainHeader"
import MainTab from "./MainTab"
import MainList from "./MainList"

const MainWrapper = styled.div`
  margin-top: 129px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 64px;
  padding-left: 64px;
  padding-bottom: 64px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    max-width: 1080px;
  }

  @media (max-width: 903.98px) {
    max-width: 904px;
    padding-right: 48px;
    padding-left: 48px;
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    padding-bottom: 24px;
  }

  @media (max-width: 552px) {
    max-width: 552px;
    padding-right: 24px;
    padding-left: 24px;
  }
`

const Main = ({ stories, type, deleteStory }) => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainTab type={type} />
      <MainList stories={stories} type={type} deleteStory={deleteStory} />
    </MainWrapper>
  )
}

export default Main
