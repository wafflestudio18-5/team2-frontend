import Articles from "../../../Constants/Articles"

const fetchMoreArticle = (setFetching, Article, setArticle) => {
  // 다음 페이지의 article 가져옴
  setFetching(true)

  const MergedArticle = Article.concat(Articles)
  setArticle(MergedArticle)

  setFetching(false)
}

export default fetchMoreArticle
