import Kicker from "./ParagraphStyles/Kicker"
import Title from "./ParagraphStyles/Title"
import Subtitle from "./ParagraphStyles/Subtitle"
import Largest from "./ParagraphStyles/Largest"
import Large from "./ParagraphStyles/Large"
import Normal from "./ParagraphStyles/Normal"
import Emphasize1 from "./ParagraphStyles/Emphasize1"
import Emphasize2 from "./ParagraphStyles/Emphasize2"

const Paragraph = ({ detail, change, sectionIndex, contentIndex }) => {
  switch (detail.emphasizing) {
    case "kicker":
      return (
        <Kicker
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Kicker>
      )

    case "title":
      return (
        <Title
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Title>
      )

    case "subtitle":
      return (
        <Subtitle
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Subtitle>
      )

    case "largest":
      return (
        <Largest
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Largest>
      )

    case "large":
      return (
        <Large
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Large>
      )

    case "normal":
      return (
        <Normal
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Normal>
      )

    case "emphasize1":
      return (
        <Emphasize1
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Emphasize1>
      )

    case "emphasize2":
      return (
        <Emphasize2
          contentEditable="true"
          onInput={change}
          data-sectionIndex={sectionIndex}
          data-contentIndex={contentIndex}
        >
          {detail.content}
        </Emphasize2>
      )

    default:
      break
  }
}

export default Paragraph
