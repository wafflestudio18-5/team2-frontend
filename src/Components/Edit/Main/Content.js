import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({ content: { type, detail }, id }) => {
  if (type === "paragraph") {
    return (
      <Paragraph
        content={detail.content}
        emphasizing={detail.emphasizing}
        id={id}
      />
    )
  }
  if (type === "image") {
    return <Image detail={detail} id={id} />
  }
}

export default Content
