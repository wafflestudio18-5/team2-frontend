import { useEffect, useState } from "react"
import handleScroll from "./Functions/handleScroll"
import MainLogin from "../../Components/MainLogin"
import Articles from "../../Constants/Articles"
import TrendingPosts from "../../Constants/TrendingPosts"
import Topics from "../../Constants/Topics"

const MainLoginPage = ({ token }) => {
  //로그인 하지 않았을 때 페이지

  const [Article, setArticle] = useState(Articles)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll(fetching, setFetching, Article, setArticle)
    )
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(fetching, setFetching, Article, setArticle)
      )
    }
  })

  return (
    <MainLogin
      TrendingPosts={TrendingPosts}
      Articles={Article}
      Topics={Topics}
      token={token}
    />
  )
}

export default MainLoginPage
