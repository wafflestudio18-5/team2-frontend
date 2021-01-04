import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const onDeleteKeyPressed = (event, story, setStory, setCaret) => {
  // Delete 키가 눌렸을 때 실행
  let newStory = JSON.parse(JSON.stringify(story))

  if (window.getSelection().getRangeAt(0).collapsed) {
    const { id, backContent, offsetList } = getIdOfCaretPlaced()
    if (id === "main") {
      // prevent error
      event.preventDefault()
      return
    }
    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))

    if (backContent !== "") {
      return
    }
    event.preventDefault()

    if (contentIndex === story[sectionIndex].length - 1) {
      if (sectionIndex !== story.length - 1) {
        newStory.splice(sectionIndex, 2, [
          ...newStory[sectionIndex],
          ...newStory[sectionIndex + 1],
        ])
        setStory(newStory)
        setCaret({ id, offset: offsetList })
      }
      return
    }

    if (story[sectionIndex][contentIndex].detail.content.length === 0) {
      newStory[sectionIndex].splice(contentIndex, 1)
      setStory(newStory)
      setCaret({ id, offset: [0] })
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
    setCaret({ id, offset: offsetList })
  } else {
    removeMultiSectionSelected(event, newStory, setStory, setCaret)
  }
}

export default onDeleteKeyPressed
