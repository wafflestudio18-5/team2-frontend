import styled from "styled-components"
import Color from "../../../Constants/Color"

const ArticleBlockStyle = styled.div`
    background: ${Color.lightGray};
`

const ArticleBlock = ({ article, index }) => {
    return (
      <ArticleBlockStyle>
        <p>{index + 1}</p>
        <p>{article.writer}</p>
        <p>{article.title}</p>
        <p>{article.subtitle}</p>
      </ArticleBlockStyle>
    )
  }
  
  export default ArticleBlock