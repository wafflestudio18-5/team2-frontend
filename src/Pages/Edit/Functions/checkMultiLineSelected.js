import removeMultiSectionSelected from "./removeMultiSectionSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const checkMultiLineSelected = (event, story, setStory, setCaret) => {
  // keyPress 입력을 받아 여러 줄이 선택된 경우 그 줄을 지우고 event.key를 입력
  const { startId, endId } = getIdOfCaretPlaced(false)
  if (startId === endId) {
    return
  }
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  removeMultiSectionSelected(event, newStory, setStory, setCaret, event.key)
}

export default checkMultiLineSelected
