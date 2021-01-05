import Search from "../../Components/Search"
import AuthModalContainer from "../../Container/AuthModal"
import { useCookies } from "react-cookie"
import { useLocation, useHistory } from "react-router-dom"
import { useState, useEffect, useCallback, useRef } from "react"
import queryString from "query-string"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import logout from "../Main/Functions/logout"
import showModal from "../Main/Functions/showModal"
import hideModal from "../Main/Functions/hideModal"
import fetchPeople from "./Functions/fetchPeople"
import fetchStories from "./Functions/fetchStories"
import search from "./Functions/search"
import onChangeInput from "./Functions/onChangeInput"
import useIntersectionObserver from "./Functions/useIntersectionObserver"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const StorySearchPage = () => {
  const searchWord = queryString.parse(useLocation().search).q
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  // states
  // current user
  const [user, setUser] = useState(undefined)
  // story 검색 결과
  const [stories, setStories] = useState([])
  // people 검색 결과
  const [people, setPeople] = useState([])
  // 검색창 값
  const [inputValue, setInputValue] = useState(searchWord)
  // dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  // AuthModal 화면 표시 여부 관리하는 state
  const [modalShow, setModalShow] = useState(false)
  // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
  const [modalVisible, setModalVisible] = useState(false)
  // modal type을 결정하는 state
  const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN)
  // request state
  const [fetching, setFetching] = useState(false)
  // check current page is end
  const [isEnd, setIsEnd] = useState(false)

  // refs
  // 현재 검색된 마지막 페이지
  const page = useRef(1)
  // target
  const targetRef = useRef(null)

  // 처음 서버로부터 검색 결과 받아옴
  useEffect(() => {
    if (token !== undefined) {
      getCurrentUser(token, setUser)
    }
    if (searchWord !== undefined || searchWord !== "") {
      setPeople([])
      setStories([])
      fetchPeople(searchWord, setPeople)
      fetchStories(searchWord, setStories, setIsEnd)
    }
  }, [searchWord, token])

  // Modal이 떠있는 동안 scroll 고정
  useEffect(() => {
    if (modalVisible === true) {
      document.body.style.cssText = `overflow: hidden; top: -${window.scrollY}px`
      return () => {
        const scrollY = document.body.style.top
        document.body.style.cssText = `position: ""; top: "";`
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [modalVisible])

  // 다음 페이지 로드
  const loadNextPage = useCallback(async () => {
    if (stories.length > 0) {
      setFetching(true)
      page.current++
      await fetchStories(searchWord, setStories, setIsEnd, page.current)
      setFetching(false)
    }
  }, [searchWord, stories])

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
      <Search
        type="story"
        searchWord={searchWord}
        user={user}
        stories={stories}
        people={people}
        onChangeInput={(event) => onChangeInput(event, setInputValue)}
        enter={(event) => search(event, inputValue, history)}
        isDropdownOpened={isDropdownOpened}
        openDropdown={() => setIsDropdownOpened(true)}
        hideDropdown={() => setIsDropdownOpened(false)}
        signOut={() => logout(token, removeCookie)}
        showModal={(modalType) =>
          showModal(modalType, setModalShow, setModalVisible, setModalType)
        }
      />
      <div ref={targetRef} />
      {modalShow && (
        <AuthModalContainer
          hideModal={() => hideModal(setModalVisible, setModalShow)}
          modalVisible={modalVisible}
          ModalType={ModalType}
        />
      )}
    </div>
  )
}

export default StorySearchPage
