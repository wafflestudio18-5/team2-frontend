import { useEffect, useState } from "react"
import handleScroll from "./Functions/handleScroll"
import onClickSearchButton from "./Functions/onClickSearchButton"
import MainLogin from "../../Components/MainLogin"
import Articles from "../../Constants/Articles"
import TrendingPosts from "../../Constants/TrendingPosts"

const MainLoginPage = ({ token }) => {
  //로그인 하지 않았을 때 페이지

  // 임시 데이터
  const user = {
    id: 0,
    username: "boqm123",
    name: "Aibald Biak",
    profileImage: "",
  }
  const centerArticles = {}

  // states
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)

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
      user={user}
      centerArticles={centerArticles}
      isSearchboxOpen={isSearchboxOpen}
      onClickSearchButton={() =>
        onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen)
      }
    />
  )
}

export default MainLoginPage
