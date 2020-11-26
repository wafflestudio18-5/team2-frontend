import ArticleContents from "./ArticleContents"
import ArticleList from "./ArticleList"

const Article = ({ Articles }) => {
    return (
        <ArticleContents>
            <ArticleList Articles = { Articles }/>
        </ArticleContents>
    )
}

export default Article