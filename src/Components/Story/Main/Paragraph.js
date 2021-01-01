import Largest from "./ParagraphStyles/Largest"
import Large from "./ParagraphStyles/Large"
import Normal from "./ParagraphStyles/Normal"
import Emphasize1 from "./ParagraphStyles/Emphasize1"
import Emphasize2 from "./ParagraphStyles/Emphasize2"

const Paragraph = ({ content, emphasizing }) => {
  let removetag = content.replace(/(<([^>]+)>)/gi, "");
  let removetagexcepta =  content.replace(/<(?!\/?a(?=>|\s.*>))\/?.*?>/, "").replace("<strong>","");
  switch (emphasizing) {
    case "largest":
      return (
        <Largest
          dangerouslySetInnerHTML={{ __html: removetag }}
          data-emphasizing={emphasizing}
        />
      )

    case "large":
      return (
        <Large
          dangerouslySetInnerHTML={{ __html: removetagexcepta }}
          data-emphasizing={emphasizing}
        />
      )

    case "normal":
      return (
        <Normal
          dangerouslySetInnerHTML={{ __html: content }}
          data-emphasizing={emphasizing}
        />
      )

    case "emphasize1":
      return (
        <Emphasize1
          dangerouslySetInnerHTML={{ __html: content }}
          data-emphasizing={emphasizing}
        />
      )

    case "emphasize2":
      return (
        <Emphasize2
          dangerouslySetInnerHTML={{ __html: removetagexcepta }}
          data-emphasizing={emphasizing}
        />
      )

    default:
      break
  }
}

export default Paragraph
