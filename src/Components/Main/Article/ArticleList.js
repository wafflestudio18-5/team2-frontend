import styled from "styled-components"
import ArticleBlock from "./ArticleBlock"

const ArticleListStyle = styled.div`
  display: block;
  width: 100%;
  @media (max-width: 900px) {
    padding-top: 40px;
  }
`

const ArticleList = ({ Articles, history }) => {
  return (
    <ArticleListStyle>
      {Articles.map((article, index) => {
        return <ArticleBlock article={article} history={history} key={index} />
      })}
    </ArticleListStyle>
  )
}

export default ArticleList
