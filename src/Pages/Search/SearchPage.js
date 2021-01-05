import Search from "../../Components/Search"
import AuthModalContainer from "../../Container/AuthModal"
import { useCookies } from "react-cookie"
import { useLocation, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import queryString from "query-string"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import logout from "../Main/Functions/logout"
import showModal from "../Main/Functions/showModal"
import hideModal from "../Main/Functions/hideModal"
import fetchPeople from "./Functions/fetchPeople"
import fetchStories from "./Functions/fetchStories"
import enter from "./Functions/enter"
import onChangeInput from "./Functions/onChangeInput"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

const SearchPage = () => {
  const searchWord = queryString.parse(useLocation().search).q
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  const [user, setUser] = useState(undefined)
  const [stories, setStories] = useState([])
  const [people, setPeople] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [showStories, setShowStories] = useState()
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  // AuthModal 화면 표시 여부 관리하는 state
  const [modalShow, setModalShow] = useState(false)
  // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
  const [modalVisible, setModalVisible] = useState(false)
  // modal type을 결정하는 state
  const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN)

  useEffect(() => {
    if (token !== undefined) {
      getCurrentUser(token, setUser)
    }
    if (searchWord !== undefined || searchWord !== "") {
      setPeople([])
      setStories([])
      fetchPeople(searchWord, setPeople)
      fetchStories(searchWord, setStories)
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

  return (
    <div>
      <Search
        searchWord={searchWord}
        user={user}
        stories={stories}
        people={people}
        onChangeInput={(event) => onChangeInput(event, setInputValue)}
        enter={(event) => enter(event, inputValue, history)}
        isDropdownOpened={isDropdownOpened}
        openDropdown={() => setIsDropdownOpened(true)}
        hideDropdown={() => setIsDropdownOpened(false)}
        signOut={() => logout(token, removeCookie)}
        showModal={(modalType) =>
          showModal(modalType, setModalShow, setModalVisible, setModalType)
        }
      />
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

export default SearchPage
