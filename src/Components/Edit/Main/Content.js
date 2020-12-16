import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({
  content: { type, detail },
  change,
  sectionIndex,
  contentIndex,
}) => {
  if (type === "paragraph") {
    return (
      <Paragraph
        detail={detail}
        change={change}
        sectionIndex={sectionIndex}
        contentIndex={contentIndex}
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
