import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const onDeleteKeyPressed = (event, story, setStory, setCaret) => {
  // Delete 키가 눌렸을 때 실행
  const range = window.getSelection().getRangeAt(0)
  let newStory = JSON.parse(JSON.stringify(story))

  if (range.collapsed) {
    const { id } = getIdOfCaretPlaced()
    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))

    const lengthOfContent =
      story[sectionIndex][contentIndex].detail.content.length

    if (range.endOffset !== lengthOfContent) {
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
        setCaret({ id, offset: lengthOfContent })
      }
      return
    }

    if (lengthOfContent === 0) {
      newStory[sectionIndex].splice(contentIndex, 1)
      setStory(newStory)
      setCaret({ id, offset: lengthOfContent })
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
    setCaret({ id, offset: lengthOfContent })
  } else {
    removeMultiSectionSelected(event, newStory, setStory, setCaret)
  }
}

export default onDeleteKeyPressed
