import { useState } from "react"
import { Main } from "../../Components/Main"
import TrendingPosts from "../../Constants/TrendingPosts"
import Articles from "../../Constants/Articles"

const MainPage = () => {
  const [reachScrollCheckPoint, setReachScrollCheckPoint] = useState(false)

  window.addEventListener("scroll", () => {
    let scrollLocation = document.documentElement.scrollTop
    if (scrollLocation >= 400) {
      setReachScrollCheckPoint(true)
    } else {
      setReachScrollCheckPoint(false)
    }
  })

  return (
    <Main
      TrendingPosts={TrendingPosts}
      reachScrollCheckPoint={reachScrollCheckPoint}
      Articles={Articles}
    />
  )
}

export default MainPage
