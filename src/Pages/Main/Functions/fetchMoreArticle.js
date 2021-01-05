import updateArticle from "./updateArticle"

const fetchMoreArticle = (setFetching, Article, setArticle, token) => {
  // 다음 페이지의 article 가져옴
  setFetching(true)
  
  updateArticle(setArticle, Article, token)

  setFetching(false)
}

export default fetchMoreArticle
