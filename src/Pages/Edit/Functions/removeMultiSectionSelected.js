import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const removeMultiSectionSelected = (
  event,
  range,
  newStory,
  setStory,
  setCaret,
  newContent = ""
) => {
  event.preventDefault()

  const { startId, endId } = getIdOfCaretPlaced(false)
  const [startSection, startContent] = startId
    .split(" ")
    .map((e) => parseInt(e))
  const [endSection, endContent] = endId.split(" ").map((e) => parseInt(e))
  const frontContent = newStory[startSection][
    startContent
  ].detail.content.slice(0, range.startOffset)
  const backContent = newStory[endSection][endContent].detail.content.slice(
    range.endOffset
  )
  const content = frontContent + newContent + backContent
  const emphasizing = newStory[startSection][startContent].detail.emphasizing

  if (startSection === endSection) {
    newStory[startSection].splice(startContent, endContent - startContent + 1, {
      type: "paragraph",
      detail: {
        content: content,
        emphasizing: emphasizing,
      },
    })
  } else {
    newStory[startSection].splice(startContent, Infinity, {
      type: "paragraph",
      detail: {
        content: content,
        emphasizing: emphasizing,
      },
    })
    newStory[endSection].splice(0, endContent + 1)
    newStory.splice(startSection, endSection - startSection + 1, [
      ...newStory[startSection],
      ...newStory[endSection],
    ])
  }
  console.log(JSON.stringify(newStory))
  setStory(newStory)
  setCaret({ id: startId, offset: frontContent.length + newContent.length })
}

export default removeMultiSectionSelected
