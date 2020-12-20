import createNewContentMultiLineSelected from "./createNewContentMultiLineSelected"
import createNewContentSingleLineSelected from "./createNewContentSingleLineSelected"
import getIdOfCaretPlaced from "./getIdOfCaretPlaced"

const createNewContent = (event, story, setStory, setCaret) => {
  // 엔터 키가 눌러지면 새로운 content를 바로 아래에 만들고 커서를 이동하는 함수.
  event.preventDefault()
  const newStory = JSON.parse(JSON.stringify(story))
  const range = window.getSelection().getRangeAt(0)
  const { startId, endId } = getIdOfCaretPlaced(false)

  if (startId !== endId) {
    createNewContentMultiLineSelected(newStory, range, startId, endId)
    let temp = startId.split(" ")
    temp[1]++
    const caretId = temp.join(" ")
    setCaret({ id: caretId, offset: 0 })
  } else {
    createNewContentSingleLineSelected(newStory, range, startId)
  }
  setStory(newStory)
}

export default createNewContent