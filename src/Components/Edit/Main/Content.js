import Paragraph from "./Paragraph"
import Image from "./Image"
import styled from "styled-components"

const Content = ({ content: { type, detail } }) => {
  if (type === "paragraph") {
    return (
      <Paragraph emphasizing={detail.emphasizing}>{detail.content}</Paragraph>
    )
  }
  if (type === "image") {
    return <p>image</p>
  }
}

export default Content
