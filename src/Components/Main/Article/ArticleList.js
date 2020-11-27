import styled from "styled-components"
import ArticleBlock from "./ArticleBlock"

const ArticleListStyle = styled.div`
    display: block;
    width: 100%;
`

const ArticleList = ({ Articles }) => {
    return (
        <ArticleListStyle>
            {Articles.map((article) => {
                return <ArticleBlock article={article} />
            })}
        </ArticleListStyle>
    )
}

export default ArticleList
