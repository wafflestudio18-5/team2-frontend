const createNewContentSingleLineSelected = (newStory, range, id) => {
  const startOffset = range.startOffset
  const endOffset = range.endOffset
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))

  const frontContent = newStory[sectionIndex][
    contentIndex
  ].detail.content.slice(0, startOffset)
  const backContent = newStory[sectionIndex][contentIndex].detail.content.slice(
    endOffset
  )
  const emphasizing = newStory[sectionIndex][contentIndex].detail.emphasizing

  newStory[sectionIndex].splice(
    contentIndex,
    1,
    {
      type: "paragraph",
      detail: {
        content: frontContent,
        emphasizing: emphasizing,
      },
    },
    {
      type: "paragraph",
      detail: {
        content: backContent,
        emphasizing: emphasizing,
      },
    }
  )
}

export default createNewContentSingleLineSelected
