import Content from "./Content"
import Section from "./Section"
import styled from "styled-components"

const MainStyle = styled.div``

const Main = ({ story, change, keyPressEventListener }) => {
  const article = story.map((section, sectionIndex) => {
    return (
      <Section>
        {section.map((content, contentIndex) => {
          const id = sectionIndex * 100 + contentIndex
          return <Content content={content} id={id} />
        })}
      </Section>
    )
  })

  return (
    <MainStyle
      contentEditable="true"
      onInput={(event) => {
        console.log(event.target)
      }}
    >
      {article}
    </MainStyle>
  )
}

export default Main
