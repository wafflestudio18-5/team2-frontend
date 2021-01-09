import Paragraph from "./Paragraph"
import Image from "./Image"
import MainBlock from "./MainBlock"
import StoryBlock from "./StoryBlock"
import styled from "styled-components"

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = ({ section, marginzero = false }) => {
  let contents = []
  section.forEach((content) => {
    if (content.type === "paragraph") {
      contents.push(
        <StoryBlock>
          <Paragraph
            content={content.detail.content}
            emphasizing={content.detail.emphasizing}
          />
        </StoryBlock>
      )
    }
    if (content.type === "image") {
      contents.push(<Image detail={content.detail} />)
    }
  })
  return (
    <MainWrapper>
      <MainBlock marginzero={marginzero}>{contents}</MainBlock>
    </MainWrapper>
  )
}

export default Content
