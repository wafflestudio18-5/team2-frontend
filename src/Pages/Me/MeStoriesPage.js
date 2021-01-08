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
import deleteStory from "./Functions/deleteStory"
import openActionButton from "./Functions/openActionButton"
import startEdit from "./Functions/startEdit"

const MeStoriesPage = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()
  const type = useLocation().pathname.split("/")[3]

  if (token === "" || token === undefined) {
    history.push("/")
  }

  const [user, setUser] = useState({})
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [stories, setStories] = useState([])
  const [fetching, setFetching] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const [isActionButtonOpen, setIsActionButtonOpen] = useState(false)
  const [selectedStoryId, setSelectedStoryId] = useState(-1)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const page = useRef(1)
  const targetRef = useRef(null)

  useEffect(() => {
    getCurrentUser(token, setUser)
    fetchStories(token, type, setStories, setIsEnd)
  }, [token, type])

  const loadNextPage = useCallback(async () => {
    if (stories.length > 0) {
      setFetching(true)
      page.current++
      await fetchStories(token, type, setStories, setIsEnd, page.current)
      setFetching(false)
    }
  }, [stories, token, type])

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
        openActionButton={(event, id) => {
          openActionButton(event, setIsActionButtonOpen, setSelectedStoryId, id)
        }}
        closeActionButton={() => {
          setIsActionButtonOpen(false)
        }}
        isActionButtonOpen={isActionButtonOpen}
        deleteStory={() => {
          deleteStory(token, selectedStoryId)
        }}
        selectedStoryId={selectedStoryId}
        startEdit={() => {
          startEdit(token, type, selectedStoryId, history)
        }}
        showConfirmModal={showConfirmModal}
        openConfirmModal={() => setShowConfirmModal(true)}
        hideConfirmModal={() => setShowConfirmModal(false)}
      />
      <div ref={targetRef} />
    </div>
  )
}

export default MeStoriesPage
