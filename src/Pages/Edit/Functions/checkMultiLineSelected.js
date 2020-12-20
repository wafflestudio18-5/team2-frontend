import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const checkMultiLineSelected = (event, story, setStory, setCaret) => {
  const range = window.getSelection().getRangeAt(0)
  const { startId, endId } = getIdOfCaretPlaced(false)
  if (startId === endId) {
    return
  }
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  removeMultiSectionSelected(
    event,
    range,
    newStory,
    setStory,
    setCaret,
    event.key
  )
}

export default checkMultiLineSelected
