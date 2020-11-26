import styled from "styled-components"
import ArticleBlock from "./ArticleBlock"

const ArticleListStyle = styled.div`
    display: block;
    width: 100%;
`

const ArticleList = ({ Articles }) => {
    return (
        <ArticleListStyle>
            {Articles.map((article, index) => {
                return <ArticleBlock index={index} article={article} />
            })}
        </ArticleListStyle>
    )
}

export default ArticleList
