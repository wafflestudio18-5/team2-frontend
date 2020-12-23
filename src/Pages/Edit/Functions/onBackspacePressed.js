import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const onBackspacePressed = (event, story, setStory, setCaret) => {
  // Backspace 키가 눌렸을 때 실행
  let newStory = JSON.parse(JSON.stringify(story))

  if (window.getSelection().getRangeAt(0).collapsed) {
    const { id, frontContent } = getIdOfCaretPlaced()
    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))

    if (frontContent !== "") {
      return
    }
    event.preventDefault()

    if (contentIndex === 0) {
      if (sectionIndex !== 0) {
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
      newStory[sectionIndex].splice(contentIndex - 1, 1)
      setStory(newStory)
      setCaret({
        id: [sectionIndex, contentIndex - 1].join(" "),
        offset: [0],
      })
      return
    }

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
    removeMultiSectionSelected(event, newStory, setStory, setCaret)
  }
}

export default onBackspacePressed
