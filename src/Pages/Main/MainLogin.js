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
import fetchArticles from './Functions/fetchArticles';
import useIntersectionObserver from '../Search/Functions/useIntersectionObserver';

const MainLoginPage = ({ token }) => {
  //로그인 하지 않았을 때 페이지

  const [user, setUser] = useState({})
  const [centerArticles, setCenterArticles] = useState([])
  const [trendingPosts, setTrendingPosts] = useState([])
  const [Article, setArticle] = useState([])

  useEffect(() => {
    getCurrentUser(token, setUser)
    getMainTrending(true, setTrendingPosts, setCenterArticles, token)
    fetchArticles(setArticle, setIsEnd);
  }, [token])

  // states
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  // request state
  const [fetching, setFetching] = useState(false);
  // check current page is end
  const [isEnd, setIsEnd] = useState(false);
  // 현재 검색된 마지막 페이지
  const page = useRef(1);
  // target
  const targetRef = useRef(null);

  // 다음 페이지 로드
  const loadNextPage = useCallback(async () => {
      if (Article.length > 0) {
          setFetching(true);
          page.current++;
          await fetchArticles(setArticle, setIsEnd, page.current);
          setFetching(false);
      }
  }, [Article]);

  // 스크롤이 끝에 닿으면 다음 페이지 요청
  useIntersectionObserver({
      target: targetRef.current,
      onIntersect: ([{ isIntersecting }]) => {
          if (isIntersecting && !fetching && !isEnd) {
              loadNextPage();
          }
      },
  });

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
