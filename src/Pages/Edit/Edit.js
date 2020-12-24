import Edit from "../../Components/Edit"
import { useState, useEffect } from "react"
import findTitle from "./Functions/findTitle"
import createNewContent from "./Functions/createNewContent"
import onDeleteKeyPressed from "./Functions/onDeleteKeyPressed"
import onBackspacePressed from "./Functions/onBackspacePressed"
import checkMultiLineSelected from "./Functions/checkMultiLineSelected"
import getIdOfCaretPlaced from "./Functions/getIdOfCaretPlaced"
import moveCaret from "./Functions/moveCaret"
import buttonFunctions from "./ButtonFunctions"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }

  const [story, setStory] = useState([
    [
      { type: "paragraph", detail: { content: "", emphasizing: "largest" } },
      { type: "paragraph", detail: { content: "", emphasizing: "normal" } },
    ],
  ])

  const getStory = () => {
    return story
  }

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

    // const newStory = JSON.parse(JSON.stringify(story))
    // newStory[sectionIndex][contentIndex] = {
    //   type: "paragraph",
    //   detail: {
    //     emphasizing: story[sectionIndex][contentIndex].detail.emphasizing,
    //     content: value,
    //   },
    // }

    //   setStory(newStory)
    //   let offset = []
    //   let tempNode = target
    //   let tempNodeIndex = 0

    //   while (tempNode !== null && tempNode.nodeType !== 3) {
    //     tempNodeIndex = tempNode.childNodes.length - 1
    //     offset.push(tempNodeIndex)
    //     tempNode = tempNode.lastChild
    //   }
    //   if (tempNode !== null) {
    //     offset.push(tempNode.textContent.length)
    //   }
    //   setCaret({ id, offset })
  }

  const publish = () => {
    // publish 버튼을 눌렀을 때 실행되는 함수. 나중에 API 관련 추가 필요
    console.log(JSON.stringify(getStory()))
  }

  const keyDownEventListener = (event) => {
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

  return (
    <Edit
      user={user}
      status="Saved"
      story={findTitle(story)}
      changeStateOnInput={changeStateOnInput}
      publish={publish}
      keyDownEventListener={keyDownEventListener}
      checkMultiLineSelected={(event) => {
        checkMultiLineSelected(event, story, setStory, setCaret)
      }}
      buttonFunctions={buttonFunctions(story, setStory)}
      getStory={getStory}
    />
  )
}

export default EditPage
