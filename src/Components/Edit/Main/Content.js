import Paragraph from "./Paragraph"
import Image from "./Image"

const Content = ({ content: { type, detail }, change, index }) => {
  if (type === "paragraph") {
    return <Paragraph detail={detail} change={change} index={index} />
  }
  if (type === "image") {
    return <Image detail={detail} change={change} index={index} />
  }
}

export default Content
