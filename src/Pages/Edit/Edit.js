import Edit from "../../Components/Edit"
import { useState } from "react"
import StoryExample from "../../Constants/StoryExample"
import findTitle from "./Functions/findTitle"
import createNewContent from "./Functions/createNewContent"
import onDeleteKeyPressed from "./Functions/onDeleteKeyPressed"
import onBackspacePressed from "./Functions/onBackspacePressed"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }

  const [story, setStory] = useState(StoryExample)

  const changeStateOnInput = (event) => {
    // 값에 변경 있을 시 state도 그에 맞게 변경
    const target = window.getSelection().getRangeAt(0).startContainer.parentNode
    const id = target.id
    const sectionIndex = parseInt(id / 100)
    const contentIndex = id % 100
    const value = target.innerHTML

    const newStory = story

    newStory[sectionIndex][contentIndex] = {
      ...story[sectionIndex][contentIndex],
      detail: {
        ...story[sectionIndex][contentIndex].detail,
        content: value,
      },
    }
    setStory(newStory)
  }

  const publish = () => {
    // publish 버튼을 눌렀을 때 실행되는 함수. 나중에 API 관련 추가 필요
    console.log(JSON.stringify(story))
  }

  const keyDownEventListener = (event) => {
    console.log(event.key)
    switch (event.key) {
      case "Enter":
        createNewContent(event, story, setStory)
        break

      case "Delete":
        console.log("hi")
        onDeleteKeyPressed(event, story, setStory)
        break

      case "Backspace":
        //onBackspacePressed(event, story, setStory)
        break

      default:
        break
    }
  }

  return (
    <Edit
      user={user}
      status="Saved"
      story={findTitle(story)}
      changeStateOnInput={changeStateOnInput}
      publish={publish}
      keyDownEventListener={keyDownEventListener}
    />
  )
}

export default EditPage
