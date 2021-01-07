import MeStories from "../../Components/MeStories"
import { useEffect, useState, useRef, useCallback } from "react"
import { useCookies } from "react-cookie"
import { useHistory, useLocation } from "react-router-dom"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Main/Functions/search"
import logout from "../Main/Functions/logout"
import useIntersectionObserver from "../Search/Functions/useIntersectionObserver"
import fetchStories from "./Functions/fetchStories"

const MeStoriesPage = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()
  const type = useLocation().pathname.split("/")[3]
  // drafts | public

  if (token === "" || token === undefined) {
    // 로그인 하지 않았으면 main page로 redirect
    history.push("/")
  }
  // states
  // user
  const [user, setUser] = useState({})
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  // my story list
  const [stories, setStories] = useState([])
  // request state
  const [fetching, setFetching] = useState(false)
  // check current page is end
  const [isEnd, setIsEnd] = useState(false)

  // refs
  // 현재 검색된 마지막 페이지
  const page = useRef(1)
  // target
  const targetRef = useRef(null)

  useEffect(() => {
    getCurrentUser(token, setUser)
    fetchStories(token, type, setStories, setIsEnd)
  }, [token, type])

  // 다음 페이지 로드
  const loadNextPage = useCallback(async () => {
    if (stories.length > 0) {
      setFetching(true)
      page.current++
      await fetchStories(token, type, setStories, setIsEnd, page)
      setFetching(false)
    }
  }, [stories, token, type])

  // 스크롤이 끝에 닿으면 다음 페이지 요청
  useIntersectionObserver({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && !fetching && !isEnd) {
        loadNextPage()
      }
    },
  })

  return (
    <div>
      <MeStories
        type={type}
        user={user}
        isDropdownOpened={isDropdownOpened}
        openDropdown={() => setIsDropdownOpened(true)}
        hideDropdown={() => setIsDropdownOpened(false)}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={() =>
          onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
        }
        onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
        search={(event) => search(event, searchValue, history)}
        signOut={() => logout(token, removeCookie)}
        history={history}
        stories={stories}
      />
      <div ref={targetRef} />
    </div>
  )
}

export default MeStoriesPage
