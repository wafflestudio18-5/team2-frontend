import styled from "styled-components"

const MainStyle = styled.div``

const Main = ({ story }) => {
  const article = story.map((section) => {
    return (
      <section>
        {section.map((content) => {
          if (content.type === "paragraph") {
          }
          if (content.type === "image") {
          } else {
            return <p>error.</p>
          }
        })}
      </section>
    )
  })

  return <MainStyle>{article}</MainStyle>
}

export default Main
