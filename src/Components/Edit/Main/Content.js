import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({ content: { type, detail } }) => {
  if (type === "paragraph") {
    return (
      <Paragraph emphasizing={detail.emphasizing}>{detail.content}</Paragraph>
    )
  }
  if (type === "image") {
    return <Image detail={detail} />
  }
}

export default Content
