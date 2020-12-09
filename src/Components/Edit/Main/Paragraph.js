import styled from "styled-components"

const Kicker = styled.h4``

const Title = styled.h3``

const Subtitle = styled.h4``

const Largest = styled.h3``

const Large = styled.h4``

const Normal = styled.p``

const Emphasize1 = styled.blockquote``

const Emphasize2 = styled.blockquote``

const Paragraph = ({ emphasizing, children }) => {
  switch (emphasizing) {
    case "kicker":
      return <Kicker>{children}</Kicker>

    case "title":
      return <Title>{children}</Title>

    case "subtitle":
      return <Subtitle>{children}</Subtitle>

    case "largest":
      return <Largest>{children}</Largest>

    case "large":
      return <Large>{children}</Large>

    case "normal":
      return <Normal>{children}</Normal>

    case "emphasize1":
      return <Emphasize1>{children}</Emphasize1>

    case "emphasize2":
      return <Emphasize2>{children}</Emphasize2>

    default:
      break
  }
}

export default Paragraph
