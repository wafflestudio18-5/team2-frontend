const createNewContentSingleLineSelected = (
  newStory,
  id,
  frontContent,
  backContent
) => {
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
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
