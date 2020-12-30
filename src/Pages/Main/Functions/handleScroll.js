import fetchMoreArticle from "./fetchMoreArticle"

const handleScroll = (fetching, setFetching, Article, setArticle) => {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  )
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  )
  const clientHeight = document.documentElement.clientHeight
  if (scrollTop + clientHeight >= scrollHeight - 1 && fetching === false) {
    fetchMoreArticle(setFetching, Article, setArticle)
  }
}

export default handleScroll
