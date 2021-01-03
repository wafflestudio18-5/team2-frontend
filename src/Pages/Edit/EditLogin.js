import Edit from "../../Components/Edit"
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
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

const EditLoginPage = ({ token }) => {
  const user = {
    username: "user Name",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   getCurrentUser(token, setUser)
  // }, [token])

  const [story, setStory] = useState([
    [
      { type: "paragraph", detail: { content: "", emphasizing: "largest" } },
      { type: "paragraph", detail: { content: "", emphasizing: "large" } },
    ],
  ])

  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const removeCookie = useCookies(["auth"])[2]

  // 글 저장 관련 state
  const [saveStatus, setSaveStatus] = useState(SaveStatusConstants.NOT_SAVED)
  const [id, setId] = useState(-1)

  const changeStateOnInput = () => {
    // 값에 변경 있을 시 state도 그에 맞게 변경
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
    setSaveStatus(SaveStatusConstants.NOT_SAVED)
    switch (event.key) {
      case "Enter":
        createNewContent(event, story, setStory, setCaret)
        break

      case "Delete":
        onDeleteKeyPressed(event, story, setStory, setCaret)
        break

      case "Backspace":
        onBackspacePressed(event, story, setStory, setCaret)
        break

      case "Control":
        getIdOfCaretPlaced(true)
        break

      default:
        break
    }
  }

  const [caret, setCaret] = useState({ id: "0 0", offset: 0 })

  useEffect(() => {
    moveCaret(caret)
  }, [caret, story])

  useEffect(() => {
    setTimeout(() => {
      const { id, offsetList } = getIdOfCaretPlaced()
      setSaveStatus(SaveStatusConstants.SAVED)
      setCaret({ id, offset: offsetList })
      console.log("saved")
    }, 5000)
  }, [saveStatus, caret])

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
    <Edit
      user={user}
      status={saveStatus}
      story={findTitle(story)}
      changeStateOnInput={changeStateOnInput}
      publish={() =>
        publish(token, story, saveStatus, setSaveStatus, id, setId)
      }
      keyDownEventListener={keyDownEventListener}
      checkMultiLineSelected={(event) => {
        checkMultiLineSelected(event, story, setStory, setCaret)
      }}
      buttonFunctions={buttonFunctions(story, setStory)}
      signOut={() => logout(token, removeCookie)}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
    />
  )
}

export default EditLoginPage
