import Kicker from "./ParagraphStyles/Kicker"
import Title from "./ParagraphStyles/Title"
import Subtitle from "./ParagraphStyles/Subtitle"
import Largest from "./ParagraphStyles/Largest"
import Large from "./ParagraphStyles/Large"
import Normal from "./ParagraphStyles/Normal"
import Emphasize1 from "./ParagraphStyles/Emphasize1"
import Emphasize2 from "./ParagraphStyles/Emphasize2"

const Paragraph = ({ content, emphasizing, id }) => {
  switch (emphasizing) {
    case "kicker":
      return <Kicker id={id}>{content}</Kicker>

    case "title":
      return <Title id={id}>{content}</Title>

    case "subtitle":
      return <Subtitle id={id}>{content}</Subtitle>

    case "largest":
      return <Largest id={id}>{content}</Largest>

    case "large":
      return <Large id={id}>{content}</Large>

    case "normal":
      return <Normal id={id} dangerouslySetInnerHTML={{ __html: content }} />

    case "emphasize1":
      return <Emphasize1 id={id}>{content}</Emphasize1>

    case "emphasize2":
      return <Emphasize2 id={id}>{content}</Emphasize2>

    default:
      break
  }
}

export default Paragraph
