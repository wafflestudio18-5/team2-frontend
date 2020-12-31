import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({ content: { type, detail }}) => {
  if (type === "paragraph") {
    return (
      <Paragraph
        content={detail.content}
        emphasizing={detail.emphasizing}
      />
    )
  }
  if (type === "image") {
    return <Image detail={detail} />
  }
}

export default Content
