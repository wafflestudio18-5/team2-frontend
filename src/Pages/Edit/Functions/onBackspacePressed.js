import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const onBackspacePressed = (event, story, setStory, setCaret) => {
  // Backspace 키가 눌렸을 때 실행
  const range = window.getSelection().getRangeAt(0)
  let newStory = JSON.parse(JSON.stringify(story))

  if (range.collapsed) {
    const { id } = getIdOfCaretPlaced()
    const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
    const selection = window.getSelection()
    const lengthOfContent =
      story[sectionIndex][contentIndex].detail.content.length

    if (selection.anchorOffset !== 0) {
      return
    }
    event.preventDefault()

    if (contentIndex === 0) {
      if (sectionIndex !== 0) {
        newStory.splice(sectionIndex - 1, 2, [
          ...newStory[sectionIndex - 1],
          ...newStory[sectionIndex],
        ])
        setStory(newStory)
      }
      return
    }

    if (lengthOfContent === 0) {
      newStory[sectionIndex].splice(contentIndex, 1)
      console.log(JSON.stringify(newStory))
      setStory(newStory)
      setCaret({
        id: sectionIndex + " " + (contentIndex - 1),
        offset: story[sectionIndex][contentIndex - 1].detail.content.length,
      })
      return
    }

    if (story[sectionIndex][contentIndex + 1].type !== "paragraph") {
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
      id: sectionIndex + " " + (contentIndex - 1),
      offset: story[sectionIndex][contentIndex - 1].detail.content.length,
    })
  } else {
    removeMultiSectionSelected(event, range, newStory, setStory, setCaret)
  }
}

export default onBackspacePressed
