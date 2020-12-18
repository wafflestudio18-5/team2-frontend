import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({
  content: { type, detail },
  change,
  sectionIndex,
  contentIndex,
  keyPressEventListener,
}) => {
  if (type === "paragraph") {
    return (
      <Paragraph
        content={detail.content}
        emphasizing={detail.emphasizing}
        change={change}
        sectionIndex={sectionIndex}
        contentIndex={contentIndex}
        keyPressEventListener={keyPressEventListener}
      />
    )
  }
  if (type === "image") {
    return (
      <Image
        detail={detail}
        change={change}
        sectionIndex={sectionIndex}
        contentIndex={contentIndex}
      />
    )
  }
}

export default Content
