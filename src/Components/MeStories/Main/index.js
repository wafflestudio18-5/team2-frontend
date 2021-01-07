import styled from "styled-components"
import MainHeader from "./MainHeader"
import MainTab from "./MainTab"
import MainList from "./MainList"

const MainWrapper = styled.div`
  margin-top: 129px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-top: 80px;
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
