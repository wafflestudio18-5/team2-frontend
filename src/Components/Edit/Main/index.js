import Image from "./Imgae"
import Paragraph from "./Paragraph"
import Section from "./Section"
import styled from "styled-components"

const MainStyle = styled.div``

const Main = ({ story }) => {
  const article = story.map((section) => {
    return (
      <Section>
        {section.map((content) => {
          if (content.type === "paragraph") {
            return (
              <Paragraph emphasizing={content.detail.emphasizing}>
                {content.detail.content}
              </Paragraph>
            )
          }
          if (content.type === "image") {
            return <Image></Image>
          } else {
            return <p>error.</p>
          }
        })}
      </Section>
    )
  })

  return <MainStyle>{article}</MainStyle>
}

export default Main
