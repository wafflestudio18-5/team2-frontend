const onDeleteKeyPressed = (event, story, setStory) => {
  // Delete 키가 눌렸을 때 실행
  const range = window.getSelection().getRangeAt(0)

  if (range.collapsed) {
    const id = range.startContainer.parentNode.id
    const sectionIndex = parseInt(id / 100)
    const contentIndex = id % 100
    const lengthOfContent =
      story[sectionIndex][contentIndex].detail.content.length

    if (range.endOffset !== lengthOfContent) {
      return
    }
    event.preventDefault()

    let newStory = JSON.parse(JSON.stringify(story))

    if (contentIndex === story[sectionIndex].length - 1) {
      if (sectionIndex !== story.length - 1) {
        newStory.splice(sectionIndex, 2, [
          ...newStory[sectionIndex],
          ...newStory[sectionIndex + 1],
        ])
        setStory(newStory)
      }
      return
    }

    if (lengthOfContent === 0) {
      newStory[sectionIndex].splice(contentIndex, 1)
      setStory(newStory)
      return
    }

    if (story[sectionIndex][contentIndex + 1].type !== "paragraph") {
      return
    }

    const emphasizing = story[sectionIndex][contentIndex].detail.emphasizing
    const content =
      story[sectionIndex][contentIndex].detail.content +
      story[sectionIndex][contentIndex + 1].detail.content

    newStory[sectionIndex].splice(contentIndex, 2, {
      type: "paragraph",
      detail: {
        content: content,
        emphasizing: emphasizing,
      },
    })

    setStory(newStory)
  } else {
    event.preventDefault()
    let newStory = JSON.parse(JSON.stringify(story))

    const startId = range.startContainer.parentNode.id
    const endId = range.endContainer.parentNode.id
    const startSection = parseInt(startId / 100)
    const endSection = parseInt(endId / 100)
    const startContent = startId % 100
    const endContent = endId % 100

    if (startSection === endSection) {
      const frontContent = newStory[startSection][
        startContent
      ].detail.content.slice(0, range.startOffset)
      const backContent = newStory[endSection][endContent].detail.content.slice(
        range.endOffset
      )
      const emphasizing =
        newStory[startSection][startContent].detail.emphasizing

      newStory[startSection].splice(
        startContent,
        endContent - startContent + 1,
        {
          type: "paragraph",
          detail: {
            content: frontContent + backContent,
            emphasizing: emphasizing,
          },
        }
      )
      setStory(newStory)
    } else {
    }
  }
}

export default onDeleteKeyPressed
