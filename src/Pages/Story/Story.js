import Story from "../../Components/Story"
import { useState, useEffect, useCallback, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import AuthModalContainer from "../../Container/AuthModal"
import { useCookies } from "react-cookie"
import hideModal from "./Functions/hideModal"
import showModal from "./Functions/showModal"
import getStory from "./Functions/getStory"
import getMe from "./Functions/getMe"
import useIntersectionObserver from "../Search/Functions/useIntersectionObserver"
import fetchResponse from "./Functions/fetchResponse"
import postResponse from "./Functions/postResponse"
import deleteResponse from "./Functions/deleteResponse"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Search/Functions/search"
import logout from "../Main/Functions/logout"
import deleteStory from "./Functions/deleteStory"

const StoryPage = () => {
  const history = useHistory()
  const token = useCookies(["auth"])[0].auth
  const removeCookie = useCookies(["auth"])[2]
  const [modalShow, setModalShow] = useState(false)
  const [logged_in, setlogged_in] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN)

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

  const [reachScrollCheckPoint, setReachScrollCheckPoint] = useState(false)
  window.addEventListener("scroll", () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    let clientHeight = document.documentElement.clientHeight
    if (scrollTop >= 300 && scrollTop + clientHeight < scrollHeight - 10) {
      setReachScrollCheckPoint(true)
    } else {
      setReachScrollCheckPoint(false)
    }
  })

  const [Response, setResponse] = useState([])
  const [ResponseNum, setResponseNum] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const page = useRef(1)
  const targetRef = useRef(null)
  const { story_id } = useParams()

  const loadNextPage = useCallback(async () => {
    if (Response.length > 0) {
      setFetching(true)
      page.current++
      await fetchResponse(
        setResponse,
        setResponseNum,
        setIsEnd,
        story_id,
        page.current
      )
      setFetching(false)
    }
  }, [Response, story_id])

  useIntersectionObserver({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      console.log(isIntersecting, fetching, isEnd)
      if (isIntersecting && !fetching && !isEnd) {
        loadNextPage()
      }
    },
  })

  const [userinfo, setuserinfo] = useState(null)
  const [storyinfo, setstoryinfo] = useState(null)
  const [me, setme] = useState({
    id: null,
  })
  const [story, setstory] = useState([])

  useEffect(() => {
    setlogged_in(token !== undefined)
    getStory(story_id, setuserinfo, setstoryinfo, setstory, history)
    fetchResponse(setResponse, setResponseNum, setIsEnd, story_id)
    getMe(token, setme)
  }, [token, history, story_id])

  const [InputValue, setInputValue] = useState("")
  const [ResponseInput, setResponseInput] = useState(false)
  const [ResponseOpen, setResponseOpen] = useState(false)

  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  if (userinfo === null || storyinfo === null) return <div />
  else
    return (
      <div>
        <Story
          showModal={(modalType) =>
            showModal(modalType, setModalShow, setModalVisible, setModalType)
          }
          reachScrollCheckPoint={reachScrollCheckPoint}
          story={story}
          storyinfo={storyinfo}
          userinfo={userinfo}
          tag={[]}
          logged_in={logged_in}
          me={me}
          response={Response}
          responseNum={ResponseNum}
          ResponseOpen={ResponseOpen}
          setResponseOpen={setResponseOpen}
          ResponseInput={ResponseInput}
          setResponseInput={setResponseInput}
          postResponse={(response) =>
            postResponse(token, response, story_id, setResponse, setResponseNum)
          }
          deleteResponse={(commentid) =>
            deleteResponse(
              token,
              story_id,
              commentid,
              setResponse,
              setResponseNum
            )
          }
          InputValue={InputValue}
          setInputValue={setInputValue}
          targetRef={targetRef}
          history={history}
          isSearchboxOpen={isSearchboxOpen}
          onClickSearchButton={() =>
            onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
          }
          onChangeSearchbox={(event) =>
            onChangeSearchbox(event, setSearchValue)
          }
          search={(event) => search(event, searchValue, history)}
          isDropdownOpened={isDropdownOpened}
          openDropdown={() => setIsDropdownOpened(true)}
          hideDropdown={() => setIsDropdownOpened(false)}
          signOut={() => logout(token, removeCookie)}
          deleteStory={() => deleteStory(token, story_id, history)}
          editStory={() => history.push("/edit/" + story_id)}
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

export default StoryPage
