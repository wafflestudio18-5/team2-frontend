import removeMultiSectionSelected from "./removeMultiSectionSelected"

const checkMultiLineSelected = (event, story, setStory) => {
  const range = window.getSelection().getRangeAt(0)
  const startId = range.startContainer.parentNode.id
  const endId = range.endContainer.parentNode.id
  if (startId === endId) {
    return
  }
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  removeMultiSectionSelected(event, range, newStory, event.key)
  setStory(newStory)
}

export default checkMultiLineSelected
