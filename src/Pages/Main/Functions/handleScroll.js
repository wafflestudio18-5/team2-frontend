import fetchMoreArticle from "./fetchMoreArticle"

const handleScroll = (fetching, setFetching, Article, setArticle, StopFetch, setStopFetch, token="") => {
  // scroll이 끝에 도달하면 다음 article 가져옴
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  )
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  )
  const clientHeight = document.documentElement.clientHeight
  if (scrollTop + clientHeight >= scrollHeight - 100 && fetching === false && StopFetch === false ) {
    fetchMoreArticle(setFetching, Article, setArticle, setStopFetch, token)
  }
}

export default handleScroll
