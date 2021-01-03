import Content from "./Content"
import Section from "./Section"
import SectionDivider from "./SectionDivider"
import styled from "styled-components"

const MainStyle = styled.div`
  :focus {
    outline: 0;
  }
`

const Main = ({
  story,
  changeStateOnInput,
  keyDownEventListener,
  checkMultiLineSelected,
}) => {
  let article = []
  const lastSection = story.length - 1
  story.forEach((section, sectionIndex) => {
    article.push(
      <Section id={sectionIndex}>
        {section.map((content, contentIndex) => {
          const id = sectionIndex + " " + contentIndex
          return <Content content={content} id={id} />
        })}
      </Section>
    )
    if (sectionIndex < lastSection) {
      article.push(<SectionDivider />)
    }
  })

  return (
    <MainStyle
      id="main"
      contentEditable="true"
      suppressContentEditableWarning={true}
      onKeyDown={keyDownEventListener}
      onKeyPress={checkMultiLineSelected}
      onInput={changeStateOnInput}
    >
      {article}
    </MainStyle>
  )
}

export default Main
