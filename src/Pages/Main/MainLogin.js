import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import handleScroll from "./Functions/handleScroll"
import onClickSearchButton from "./Functions/onClickSearchButton"
import onChangeSearchbox from "./Functions/onChangeSearchbox"
import search from "./Functions/search"
import getCurrentUser from "./Functions/getCurrentUser"
import logout from "./Functions/logout"
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
  const centerArticles = [
    {
      user: {
        id: 0,
        username: "basdva",
        profile_image: "",
      },
      story: {
        id: 0,
        uid: 0,
        title: "Aflkba Sbilall",
        subtitle: "Afblla skbial boal eibibia slaqbp sl",
        created_at: "2020-12-31",
      },
    },
    {
      user: {
        id: 1,
        username: "tkbka",
        profile_image: "",
      },
      story: {
        id: 1,
        uid: 1,
        title: "Aov lals",
        subtitle: "Afblla skbial boal eibibia slaqbp sl",
        created_at: "2020-12-31",
      },
    },
    {
      user: {
        id: 2,
        username: "Wlbll",
        profile_image: "",
      },
      story: {
        id: 2,
        uid: 2,
        title: "Wbslb viqm viuqwu",
        subtitle: "Afblla skbial boal eibibia slaqbp sl",
        created_at: "2020-12-31",
      },
    },
    {
      user: {
        id: 3,
        username: "Vuwuqa",
        profile_image: "",
      },
      story: {
        id: 3,
        uid: 3,
        title:
          "Htanvda iba bpasld Blbssd? Avc bislsl biewq Ac. Sdiblsi bi Ai igbasc",
        subtitle: "Afblla skbial boal eibibia slaqbp sl",
        created_at: "2020-12-31",
      },
    },
    {
      user: {
        id: 3,
        username: "Nmrial",
        profile_image: "",
      },
      story: {
        id: 3,
        uid: 3,
        title: "Tamriel sbaasc qboi",
        subtitle: "Afblla skbial boal eibibia slaqbp sl",
        created_at: "2020-12-31",
      },
    },
  ]

  // 이후 api 추가되면 사용
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   getCurrentUser(token, setUser)
  //   // TODO: 글 불러오는 작업 추가
  // }, [token])

  // states
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const [Article, setArticle] = useState(Articles)
  const [fetching, setFetching] = useState(false)

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
        onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
      }
      onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
      search={(event) => search(event, searchValue, history)}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
      signOut={() => logout(token, removeCookie)}
    />
  )
}

export default MainLoginPage
