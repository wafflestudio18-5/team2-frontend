const createNewContentMultiLineSelected = (newStory, range, startId, endId) => {
  const startOffset = range.startOffset
  const endOffset = range.endOffset
  const [startSection, startContent] = startId
    .split(" ")
    .map((e) => parseInt(e))
  const [endSection, endContent] = endId.split(" ").map((e) => parseInt(e))

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
