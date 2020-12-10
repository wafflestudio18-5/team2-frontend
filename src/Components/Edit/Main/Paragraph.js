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
      return <Kicker contentEditable="true">{children}</Kicker>

    case "title":
      return <Title contentEditable="true">{children}</Title>

    case "subtitle":
      return <Subtitle contentEditable="true">{children}</Subtitle>

    case "largest":
      return <Largest contentEditable="true">{children}</Largest>

    case "large":
      return <Large contentEditable="true">{children}</Large>

    case "normal":
      return <Normal contentEditable="true">{children}</Normal>

    case "emphasize1":
      return <Emphasize1 contentEditable="true">{children}</Emphasize1>

    case "emphasize2":
      return <Emphasize2 contentEditable="true">{children}</Emphasize2>

    default:
      break
  }
}

export default Paragraph
