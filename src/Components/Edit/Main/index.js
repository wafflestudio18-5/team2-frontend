import Content from "./Content"
import Section from "./Section"
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
  const article = story.map((section, sectionIndex) => {
    return (
      <Section id={sectionIndex}>
        {section.map((content, contentIndex) => {
          const id = sectionIndex + " " + contentIndex
          return <Content content={content} id={id} />
        })}
      </Section>
    )
  })

  return (
    <MainStyle
      contentEditable="true"
      onKeyDown={keyDownEventListener}
      onKeyPress={checkMultiLineSelected}
      onInput={changeStateOnInput}
    >
      {article}
    </MainStyle>
  )
}

export default Main
