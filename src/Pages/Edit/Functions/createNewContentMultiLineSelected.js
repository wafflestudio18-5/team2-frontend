const createNewContentMultiLineSelected = (newStory, range, startId, endId) => {
  const startOffset = range.startOffset
  const endOffset = range.endOffset
  const startSection = parseInt(startId / 100)
  const endSection = parseInt(endId / 100)
  const startContent = startId % 100
  const endContent = endId % 100

  const frontContent = newStory[startSection][
    startContent
  ].detail.content.slice(0, startOffset)

  const backContent = newStory[endSection][endContent].detail.content.slice(
    endOffset
  )
  const startEmphasizing =
    newStory[startSection][startContent].detail.emphasizing
  const endEmphasizing = newStory[endSection][endContent].detail.emphasizing

  if (startSection !== endSection) {
    newStory[startSection].splice(
      startContent,
      Infinity,
      {
        type: "paragraph",
        detail: {
          content: frontContent,
          emphasizing: startEmphasizing,
        },
      },
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "normal",
        },
      }
    )
    newStory[endSection].splice(0, endSection + 1, {
      type: "paragraph",
      detail: {
        content: backContent,
        emphasizing: endEmphasizing,
      },
    })
  } else {
    newStory[startSection].splice(
      startContent,
      endContent - startContent + 1,
      {
        type: "paragraph",
        detail: {
          content: frontContent,
          emphasizing: startEmphasizing,
        },
      },
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "normal",
        },
      },
      {
        type: "paragraph",
        detail: {
          content: backContent,
          emphasizing: endEmphasizing,
        },
      }
    )
  }
}

export default createNewContentMultiLineSelected
