import Kicker from "./ParagraphStyles/Kicker"
import Title from "./ParagraphStyles/Title"
import Subtitle from "./ParagraphStyles/Subtitle"
import Largest from "./ParagraphStyles/Largest"
import Large from "./ParagraphStyles/Large"
import Normal from "./ParagraphStyles/Normal"
import Emphasize1 from "./ParagraphStyles/Emphasize1"
import Emphasize2 from "./ParagraphStyles/Emphasize2"

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
