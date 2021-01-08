import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const checkMultiLineSelected = (event, story, setStory, setCaret) => {
  const { startId, endId } = getIdOfCaretPlaced(false)
  if (startId === endId) {
    return
  }
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  removeMultiSectionSelected(event, newStory, setStory, setCaret, event.key)
}

export default checkMultiLineSelected
