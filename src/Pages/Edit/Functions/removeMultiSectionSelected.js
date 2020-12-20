const removeMultiSectionSelected = (event, range, newStory) => {
  event.preventDefault()

  const startId = range.startContainer.parentNode.id
  const endId = range.endContainer.parentNode.id
  const startSection = parseInt(startId / 100)
  const endSection = parseInt(endId / 100)
  const startContent = startId % 100
  const endContent = endId % 100
  const frontContent = newStory[startSection][
    startContent
  ].detail.content.slice(0, range.startOffset)
  const backContent = newStory[endSection][endContent].detail.content.slice(
    range.endOffset
  )
  const emphasizing = newStory[startSection][startContent].detail.emphasizing

  if (startSection === endSection) {
    newStory[startSection].splice(startContent, endContent - startContent + 1, {
      type: "paragraph",
      detail: {
        content: frontContent + backContent,
        emphasizing: emphasizing,
      },
    })
  } else {
    newStory[startSection].splice(startContent, Infinity, {
      type: "paragraph",
      detail: {
        content: frontContent + backContent,
        emphasizing: emphasizing,
      },
    })
    newStory[endSection].splice(0, endContent + 1)
    newStory.splice(
      startSection,
      endSection - startSection + 1,
      ...newStory[startSection],
      ...newStory[endSection]
    )
  }
}

export default removeMultiSectionSelected
