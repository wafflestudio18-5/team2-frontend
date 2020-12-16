import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({ content: { type, detail }, change }) => {
  if (type === "paragraph") {
    return (
      <Paragraph emphasizing={detail.emphasizing} change={change}>
        {detail.content}
      </Paragraph>
    )
  }
  if (type === "image") {
    return <Image detail={detail} change={change} />
  }
}

export default Content
