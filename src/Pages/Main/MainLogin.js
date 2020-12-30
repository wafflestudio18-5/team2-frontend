import { useEffect, useState } from "react"
import MainLogin from "../../Components/MainLogin"
import Articles from "../../Constants/Articles"
import handleScroll from "./Functions/handleScroll"

const MainLoginPage = () => {
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

  return <MainLogin />
}

export default MainLoginPage
