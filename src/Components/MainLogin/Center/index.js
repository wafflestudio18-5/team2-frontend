import styled from "styled-components"
import CenterLeft from "./CenterLeft"
import CenterRight from "./CenterRight"
import BigStory from "./BigStory"
import SmallStory from "./SmallStory"
import Color from "../../../Constants/Color"

const CenterBorder = styled.div`
  border-bottom: 1px solid ${Color.lightGray};
`

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
    <CenterBorder>
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
    </CenterBorder>
  )
}

export default Center
