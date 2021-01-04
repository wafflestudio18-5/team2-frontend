import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const onBackspacePressed = (event, story, setStory, setCaret) => {
  // Backspace 키가 눌렸을 때 실행
  let newStory = JSON.parse(JSON.stringify(story))

  if (window.getSelection().getRangeAt(0).collapsed) {
    // when range is collapsed
    const { id, frontContent } = getIdOfCaretPlaced()
    if (id === "main") {
      event.preventDefault()
      return
    }
    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))

    if (frontContent !== "") {
      // caret 기준 앞쪽에 내용이 남아있으면 default action 실행
      return
    }
    event.preventDefault()
    if (contentIndex === 0) {
      if (sectionIndex !== 0) {
        // caret이 위치한 content가 속한 section의 첫번째 content인 경우 section 간의 경계를 지움
        const previousSectionLength = newStory[sectionIndex - 1].length - 1
        newStory.splice(sectionIndex - 1, 2, [
          ...newStory[sectionIndex - 1],
          ...newStory[sectionIndex],
        ])
        setStory(newStory)

        let offset = []
        let tempNode = document.getElementById(
          [sectionIndex - 1, previousSectionLength].join(" ")
        )
        let tempNodeIndex = 0

        while (
          (tempNode !== null && tempNode.nodeType !== 3,
          tempNode.childNodes.length !== 0)
        ) {
          tempNodeIndex = tempNode.childNodes.length - 1
          offset.push(tempNodeIndex)
          tempNode = tempNode.lastChild
        }
        if (tempNode !== null) {
          offset.push(tempNode.textContent.length)
        }
        setCaret({
          id: [sectionIndex - 1, previousSectionLength].join(" "),
          offset,
        })
      }
      return
    }

    if (story[sectionIndex][contentIndex - 1].detail.content.length === 0) {
      // caret이 속한 content의 바로 앞 content가 비어있는 경우 그 content를 삭제
      newStory[sectionIndex].splice(contentIndex - 1, 1)
      setStory(newStory)
      setCaret({
        id: [sectionIndex, contentIndex - 1].join(" "),
        offset: [0],
      })
      return
    }
    // caret이 속한 content를 바로 앞 content의 뒤에 붙이고 원래 content는 삭제. emphasizing은 앞 content를 따라감
    let offset = []
    let tempNode = document.getElementById(
      [sectionIndex, contentIndex - 1].join(" ")
    )
    let tempNodeIndex = 0

    while (tempNode !== null && tempNode.nodeType !== 3) {
      tempNodeIndex = tempNode.childNodes.length - 1
      offset.push(tempNodeIndex)
      tempNode = tempNode.lastChild
    }
    if (tempNode !== null) {
      offset.push(tempNode.textContent.length)
    }

    if (story[sectionIndex][contentIndex].detail.content.length === 0) {
      newStory[sectionIndex].splice(contentIndex, 1)
      setStory(newStory)
      setCaret({
        id: [sectionIndex, contentIndex - 1].join(" "),
        offset,
      })
      return
    }

    if (story[sectionIndex][contentIndex - 1].type !== "paragraph") {
      return
    }

    const emphasizing = story[sectionIndex][contentIndex - 1].detail.emphasizing
    const content =
      story[sectionIndex][contentIndex - 1].detail.content +
      story[sectionIndex][contentIndex].detail.content

    newStory[sectionIndex].splice(contentIndex - 1, 2, {
      type: "paragraph",
      detail: {
        content: content,
        emphasizing: emphasizing,
      },
    })

    setStory(newStory)
    setCaret({
      id: [sectionIndex, contentIndex - 1].join(" "),
      offset,
    })
  } else {
    // 여러 줄이 선택된 경우 selection에 포함된 모든 내용을 삭제
    removeMultiSectionSelected(event, newStory, setStory, setCaret)
  }
}

export default onBackspacePressed
