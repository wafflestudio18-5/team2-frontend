import Edit from "../../Components/Edit"
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { useHistory } from "react-router-dom"
import SaveStatusConstants from "../../Constants/SaveStatusConstants"
import findTitle from "./Functions/findTitle"
import createNewContent from "./Functions/createNewContent"
import onDeleteKeyPressed from "./Functions/onDeleteKeyPressed"
import onBackspacePressed from "./Functions/onBackspacePressed"
import checkMultiLineSelected from "./Functions/checkMultiLineSelected"
import getIdOfCaretPlaced from "./Functions/getIdOfCaretPlaced"
import moveCaret from "./Functions/moveCaret"
import buttonFunctions from "./ButtonFunctions"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import logout from "../Main/Functions/logout"
import saveStory from "./Functions/saveStory"
import publish from "./Functions/publish"
import preserveCaret from "./Functions/preserveCaret"
import addDivider from "./Functions/addDivider"
import createImage from "./Functions/createImage"

const EditLoginPage = ({ token }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    getCurrentUser(token, setUser)
  }, [token])

  const [story, setStory] = useState([
    [
      { type: "paragraph", detail: { content: "", emphasizing: "largest" } },
      { type: "paragraph", detail: { content: "", emphasizing: "large" } },
    ],
  ])

  const removeCookie = useCookies(["auth"])[2]
  const history = useHistory()

  // 글 저장 관련
  const [saveStatus, setSaveStatus] = useState(SaveStatusConstants.INIT)
  const [id, setId] = useState(-1)
  var typingTimer
  const startTimer = () => {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => {
      preserveCaret(() => {
        saveStory(token, story, saveStatus, setSaveStatus, id, setId)
      })
    }, 3000)
  }

  const changeStateOnInput = (event) => {
    // 값에 변경 있을 시 state도 그에 맞게 변경
    preserveCaret(() => {
      if (saveStatus === SaveStatusConstants.SAVING) {
        return
      }
      setSaveStatus(SaveStatusConstants.NOT_SAVED)
    })
    const { id, target } = getIdOfCaretPlaced()

    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
    let value = target.innerHTML
    if (value === "<br>") {
      value = ""
    }

    story[sectionIndex][contentIndex] = {
      ...story[sectionIndex][contentIndex],
      detail: {
        ...story[sectionIndex][contentIndex].detail,
        content: value,
      },
    }
  }

  const keyDownEventListener = (event) => {
    clearTimeout(typingTimer)
    switch (event.key) {
      case "Enter":
        createNewContent(event, story, setStory, setCaret)
        preserveCaret(() => {
          if (saveStatus === SaveStatusConstants.SAVING) {
            return
          }
          setSaveStatus(SaveStatusConstants.NOT_SAVED)
        })
        break

      case "Delete":
        onDeleteKeyPressed(event, story, setStory, setCaret)
        preserveCaret(() => {
          if (saveStatus === SaveStatusConstants.SAVING) {
            return
          }
          setSaveStatus(SaveStatusConstants.NOT_SAVED)
        })
        break

      case "Backspace":
        onBackspacePressed(event, story, setStory, setCaret)
        preserveCaret(() => {
          if (saveStatus === SaveStatusConstants.SAVING) {
            return
          }
          setSaveStatus(SaveStatusConstants.NOT_SAVED)
        })
        break

      case "Control":
        // For testing
        console.log(JSON.stringify(story))
        break

      default:
        break
    }
  }

  const [caret, setCaret] = useState({ id: "0 0", offset: 0 })

  useEffect(() => {
    moveCaret(caret)
  }, [caret])

  // Dropdown 관련
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
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

  // Add content button 관련
  const [showImageUrlInput, setShowImageUrlInput] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [idImagePlaced, setIdImagePlaced] = useState("0 0")
  const onChangeUrl = (event) => {
    setImageUrl(event.target.value)
  }
  const addImage = (id) => {
    setShowImageUrlInput(true)
    setIdImagePlaced(id)
  }
  const hideInput = () => {
    setImageUrl("")
    setShowImageUrlInput(false)
  }

  return (
    <Edit
      user={user}
      status={saveStatus}
      story={findTitle(story)}
      changeStateOnInput={changeStateOnInput}
      publish={() => {
        publish(token, story, saveStatus, setSaveStatus, id, setId, history)
        clearTimeout(typingTimer)
      }}
      keyDownEventListener={keyDownEventListener}
      checkMultiLineSelected={(event) => {
        checkMultiLineSelected(event, story, setStory, setCaret)
      }}
      buttonFunctions={buttonFunctions(story, setStory)}
      signOut={() => logout(token, removeCookie)}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
      startTimer={startTimer}
      addDivider={(id) => {
        addDivider(id, story, setStory, setCaret)
      }}
      addImage={addImage}
      showImageUrlInput={showImageUrlInput}
      createImage={() =>
        createImage(
          idImagePlaced,
          imageUrl,
          story,
          setStory,
          setShowImageUrlInput
        )
      }
      onChangeUrl={onChangeUrl}
      hideInput={hideInput}
    />
  )
}

export default EditLoginPage
