import styled from "styled-components"
import CenterLeft from "./CenterLeft"
import CenterRight from "./CenterRight"
import CenterImage from "./CenterImage"
import BigStory from "./BigStory"
import SmallStory from "./SmallStory"
import Color from "../../../Constants/Color"

const CenterBorder = styled.div`
  border-bottom: 1px solid ${Color.lightGray};
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`

const CenterWrapper = styled.div`
  width: 100%;
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
          <BigStory story={stories[0]} />
        </CenterLeft>
        <CenterRight>
          <SmallStory story={stories[1]} />
          <SmallStory story={stories[2]} />
          <SmallStory story={stories[3]} />
          <SmallStory story={stories[4]} />
        </CenterRight>
        <CenterImage />
      </CenterWrapper>
    </CenterBorder>
  )
}

export default Center
