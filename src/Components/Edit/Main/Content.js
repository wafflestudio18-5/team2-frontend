import Paragraph from "./Paragraph"
import Image from "./Image"
import styled from "styled-components"

const Content = ({ content: { type, detail } }) => {
  if (type === "paragraph") {
    return <p>paragraph</p>
  }
  if (type === "image") {
    return <p>image</p>
  }
}

export default Content
