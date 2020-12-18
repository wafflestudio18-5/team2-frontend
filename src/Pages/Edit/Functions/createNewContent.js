const createNewContent = (event, story, setStory) => {
  // 엔터 키가 눌러지면 새로운 content를 바로 아래에 만들고 커서를 이동하는 함수.
  event.preventDefault()

  const id = event.target.id
  const sectionIndex = parseInt(id / 100)
  const contentIndex = id % 100

  let newStory = JSON.parse(JSON.stringify(story))
  const originalContent = story[sectionIndex][contentIndex]
  const selection = window.getSelection()

  const frontContent = originalContent.detail.content.slice(
    0,
    selection.anchorOffset
  )
  const backContent = originalContent.detail.content.slice(
    selection.focusOffset
  )

  let newLineEmphasizing = originalContent.detail.emphasizing
  if (selection.focusOffset === originalContent.detail.content.length) {
    newLineEmphasizing = "normal"
  }

  newStory[sectionIndex].splice(
    contentIndex,
    1,
    {
      type: "paragraph",
      detail: {
        content: frontContent,
        emphasizing: originalContent.detail.emphasizing,
      },
    },
    {
      type: "paragraph",
      detail: {
        content: backContent,
        emphasizing: newLineEmphasizing,
      },
    }
  )
  setStory(newStory)
}

export default createNewContent
