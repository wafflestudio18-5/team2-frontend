import updateArticle from "./updateArticle"

const fetchMoreArticle = (setFetching, Article, setArticle, setStopFetch, token) => {
  // 다음 페이지의 article 가져옴
  setFetching(true)
  updateArticle(setArticle, Article, setStopFetch, token)
  setFetching(false)
}

export default fetchMoreArticle
