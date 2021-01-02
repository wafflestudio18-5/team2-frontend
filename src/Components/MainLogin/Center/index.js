import styled from "styled-components"
import CenterLeft from "./CenterLeft"
import CenterRight from "./CenterRight"
import BigStory from "./BigStory"
import SmallStory from "./SmallStory"

const CenterWrapper = styled.div`
  max-width: 1192px;
  display: flex;
  margin: 0 64px;

  @media (max-width: 903.98px) {
    margin: 0 48px;
  }

  @media (max-width: 727.98px) {
    flex-direction: column;
    margin: 0 24px;
  }
`

const Center = ({ stories }) => {
  return (
    <CenterWrapper>
      <CenterLeft>
        <BigStory {...stories[0]} />
      </CenterLeft>
      <CenterRight>
        <SmallStory {...stories[1]} />
        <SmallStory {...stories[2]} />
        <SmallStory {...stories[3]} />
        <SmallStory {...stories[4]} />
      </CenterRight>
    </CenterWrapper>
  )
}

export default Center
