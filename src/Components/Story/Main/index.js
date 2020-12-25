import styled from "styled-components"
import About from "./About"
import MainStory from "./MainStory"

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  word-break: break-word;
`

const Main = () => {
    return (
      <MainWrapper>
          <MainStory />
          <About />
      </MainWrapper>
    )
  }
  
  export default Main