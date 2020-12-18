import Kicker from "./ParagraphStyles/Kicker"
import Title from "./ParagraphStyles/Title"
import Subtitle from "./ParagraphStyles/Subtitle"
import Largest from "./ParagraphStyles/Largest"
import Large from "./ParagraphStyles/Large"
import Normal from "./ParagraphStyles/Normal"
import Emphasize1 from "./ParagraphStyles/Emphasize1"
import Emphasize2 from "./ParagraphStyles/Emphasize2"

const Paragraph = ({
  content,
  emphasizing,
  change,
  sectionIndex,
  contentIndex,
  createNewContent,
}) => {
  const id = sectionIndex * 100 + contentIndex

  switch (emphasizing) {
    case "kicker":
      return (
        <Kicker
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Kicker>
      )

    case "title":
      return (
        <Title
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Title>
      )

    case "subtitle":
      return (
        <Subtitle
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Subtitle>
      )

    case "largest":
      return (
        <Largest
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Largest>
      )

    case "large":
      return (
        <Large
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Large>
      )

    case "normal":
      return (
        <Normal
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Normal>
      )

    case "emphasize1":
      return (
        <Emphasize1
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Emphasize1>
      )

    case "emphasize2":
      return (
        <Emphasize2
          contentEditable="true"
          onInput={change}
          id={id}
          onKeyPress={createNewContent}
        >
          {content}
        </Emphasize2>
      )

    default:
      break
  }
}

export default Paragraph
