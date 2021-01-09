import { useEffect, useState, useRef, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import onClickSearchButton from "./Functions/onClickSearchButton"
import onChangeSearchbox from "./Functions/onChangeSearchbox"
import search from "../Search/Functions/search"
import getCurrentUser from "./Functions/getCurrentUser"
import getMainTrending from "./Functions/getMainTrending"
import logout from "./Functions/logout"
import MainLogin from "../../Components/MainLogin"
import fetchArticles from "./Functions/fetchArticles"
import useIntersectionObserver from "../Search/Functions/useIntersectionObserver"

const MainLoginPage = ({ token }) => {
  const [user, setUser] = useState({})
  const [centerArticles, setCenterArticles] = useState([])
  const [trendingPosts, setTrendingPosts] = useState([])
  const [Article, setArticle] = useState([])

  useEffect(() => {
    getCurrentUser(token, setUser)
    getMainTrending(true, setTrendingPosts, setCenterArticles, token)
    fetchArticles(setArticle, setIsEnd, 1, token)
  }, [token])

  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const [fetching, setFetching] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const page = useRef(1)
  const targetRef = useRef(null)

  const loadNextPage = useCallback(async () => {
    if (Article.length > 0) {
      setFetching(true)
      page.current++
      await fetchArticles(setArticle, setIsEnd, page.current, token)
      setFetching(false)
    }
  }, [Article, token])

  useIntersectionObserver({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && !fetching && !isEnd) {
        loadNextPage()
      }
    },
  })

  const history = useHistory()
  const removeCookie = useCookies(["auth"])[2]

  window.addEventListener("resize", () => {
    const dropdown = document.getElementById("dropdown")
    let left =
      document.getElementById("userProfile").getBoundingClientRect().left - 150
    if (dropdown !== null) {
      if (window.innerWidth < 904) {
        if (window.innerWidth < 728) {
          left -= 40
        } else {
          left -= 16
        }
      }
      dropdown.style.left = left + "px"
    }
  })

  return (
    <div>
      <MainLogin
        trendingPosts={trendingPosts}
        Articles={Article}
        user={user}
        centerArticles={centerArticles}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={() =>
          onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
        }
        onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
        search={(event) => search(event, searchValue, history)}
        isDropdownOpened={isDropdownOpened}
        openDropdown={() => setIsDropdownOpened(true)}
        hideDropdown={() => setIsDropdownOpened(false)}
        signOut={() => logout(token, removeCookie)}
        history={history}
      />
      <div ref={targetRef} />
    </div>
  )
}

export default MainLoginPage
