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

  const [user, setUser] = useState(undefined)
  const [stories, setStories] = useState([])
  const [people, setPeople] = useState([])
  const [inputValue, setInputValue] = useState(searchWord)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN)
  const [fetching, setFetching] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const page = useRef(1)
  const targetRef = useRef(null)

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

  const loadNextPage = useCallback(async () => {
    if (stories.length > 0) {
      setFetching(true)
      page.current++
      await fetchStories(searchWord, setStories, setIsEnd, page.current)
      setFetching(false)
    }
  }, [searchWord, stories])

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
