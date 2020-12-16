import Content from "./Content"
import Section from "./Section"
import styled from "styled-components"

const MainStyle = styled.div``

const Main = ({ story, change }) => {
  const article = story.map((section, sectionIndex) => {
    return (
      <Section>
        {section.map((content, contentIndex) => (
          <Content
            content={content}
            change={change}
            sectionIndex={sectionIndex}
            contentIndex={contentIndex}
          />
        ))}
      </Section>
    )
  })

  return <MainStyle>{article}</MainStyle>
}

export default Main
