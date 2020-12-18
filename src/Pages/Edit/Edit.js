import Edit from "../../Components/Edit"
import { useState } from "react"
import StoryExample from "../../Constants/StoryExample"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }

  const [story, setStory] = useState(StoryExample)

  const findTitle = (s) => {
    // story를 입력받아 kicker, title, subtitle이 표시될지 아닐지 판단한 후 적절히 수정해 리턴
    // 이후 각 컴포넌트들은 이 함수를 거쳐 수정된 story를 가지고 출력하게 됨.
    let checker = true
    let result = JSON.parse(JSON.stringify(s))
    const firstSection = s[0]

    mainLoop: for (let i = 0; i < firstSection.length; i++) {
      if (!checker) {
        break
      }
      if (firstSection[i].type === "paragraph") {
        checker = false

        switch (firstSection[i].detail.emphasizing) {
          case "largest":
            result[0][i].detail.emphasizing = "title"
            if (firstSection[i + 1].detail.emphasizing === "large") {
              result[0][i + 1].detail.emphasizing = "subtitle"
            }
            break mainLoop

          case "large":
            if (firstSection[i + 1].detail.emphasizing === "largest") {
              result[0][i].detail.emphasizing = "kicker"
              result[0][i + 1].detail.emphasizing = "title"
              if (firstSection[i + 2].detail.emphasizing === "large") {
                result[0][i + 2].detail.emphasizing = "subtitle"
              }
            }
            break mainLoop

          default:
            break mainLoop
        }
      }
    }
    return result
  }

  const onInput = (event) => {
    // 값에 변경 있을 시 state도 그에 맞게 변경
    const id = event.target.id
    const sectionIndex = parseInt(id / 100)
    const contentIndex = id % 100
    const value = event.target.innerHTML

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

  const createNewContent = (sectionIndex, contentIndex) => {
    // 엔터 키가 눌러지면 새로운 content를 바로 아래에 만들고 커서를 이동하는 함수.
    let newStory = JSON.parse(JSON.stringify(story))
    const originalContent = story[sectionIndex][contentIndex]
    const selection = window.getSelection()

    const frontContent = originalContent.detail.content.slice(
      0,
      selection.anchorOffset
    )
    const backContent = originalContent.detail.content.slice(
      selection.focusOffset
    )

    let newLineEmphasizing = originalContent.detail.emphasizing
    if (selection.focusOffset === originalContent.detail.content.length) {
      newLineEmphasizing = "normal"
    }

    newStory[sectionIndex].splice(
      contentIndex,
      1,
      {
        type: "paragraph",
        detail: {
          content: frontContent,
          emphasizing: originalContent.detail.emphasizing,
        },
      },
      {
        type: "paragraph",
        detail: {
          content: backContent,
          emphasizing: newLineEmphasizing,
        },
      }
    )
    setStory(newStory)
  }

  const onDeleteKeyPressed = (sectionIndex, contentIndex) => {
    const selection = window.getSelection
    const lengthOfContent =
      story[sectionIndex][contentIndex].detail.content.length

    if (selection.focusOffset !== lengthOfContent) {
      return
    }
    let newStory = JSON.parse(JSON.stringify(story))

    if (contentIndex === story[sectionIndex].length - 1) {
      if (sectionIndex !== story.length - 1) {
        newStory.splice(
          sectionIndex,
          2,
          ...newStory[sectionIndex],
          ...newStory[sectionIndex + 1]
        )
      }
      return
    }

    if (lengthOfContent === 0) {
      newStory.splice(sectionIndex, 1)
      return
    }

    if (story[sectionIndex][contentIndex + 1].type !== "paragraph") {
      return
    }

    const emphasizing = story[sectionIndex][contentIndex].detail.emphasizing
    const content =
      story[sectionIndex][contentIndex].detail.content +
      story[sectionIndex][contentIndex + 1].detail.content

    newStory[sectionIndex].splice(contentIndex, 2, {
      type: "paragraph",
      detail: {
        content: content,
        emphasizing: emphasizing,
      },
    })
    setStory(newStory)
  }

  const keyPressEventListener = (event) => {
    const id = event.target.id
    const sectionIndex = parseInt(id / 100)
    const contentIndex = id % 100
    console.log(event.key)

    switch (event.key) {
      case "Enter":
        event.preventDefault()
        createNewContent(sectionIndex, contentIndex)
        break

      case "Delete":
        onDeleteKeyPressed(sectionIndex, contentIndex)
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
      change={onInput}
      publish={publish}
      keyPressEventListener={keyPressEventListener}
    />
  )
}

export default EditPage
