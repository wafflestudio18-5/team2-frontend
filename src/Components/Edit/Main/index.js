import Content from "./Content"
import Section from "./Section"
import styled from "styled-components"

const MainStyle = styled.div``

const Main = ({ story }) => {
  const article = story.map((section) => {
    return (
      <Section>
        {section.map((content) => (
          <Content content={content} />
        ))}
      </Section>
    )
  })

  return <MainStyle>{article}</MainStyle>
}

export default Main