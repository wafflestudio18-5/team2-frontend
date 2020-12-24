const createNewContentSingleLineSelected = (
  //하나의 줄 안에 selection이 있을 떄 엔터키가 눌리면 endOffset 뒤 content를 다음 줄로 옮김
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
