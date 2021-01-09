import createNewContentMultiLineSelected from "./createNewContentMultiLineSelected"
import createNewContentSingleLineSelected from "./createNewContentSingleLineSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const createNewContent = (event, story, setStory, setCaret) => {
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  const { startId, endId, frontContent, backContent } = getIdOfCaretPlaced(
    false
  )
  if (startId === "main") {
    event.preventDefault()
    return
  }

  if (startId !== endId) {
    createNewContentMultiLineSelected(
      newStory,
      startId,
      endId,
      frontContent,
      backContent
    )
  } else {
    createNewContentSingleLineSelected(
      newStory,
      startId,
      frontContent,
      backContent
    )
  }
  let temp = startId.split(" ")
  temp[1]++
  const caretId = temp.join(" ")
  setCaret({ id: caretId, offset: 0 })
  setStory(newStory)
}

export default createNewContent
