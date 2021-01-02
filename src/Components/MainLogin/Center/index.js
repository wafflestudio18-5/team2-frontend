import styled from "styled-components"
import CenterLeft from "./CenterLeft"
import CenterRight from "./CenterRight"
import BigStory from "./BigStory"
import SmallStory from "./SmallStory"

const CenterWrapper = styled.div``

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
