const checkMultiLineSelected = (event, story, setStory) => {
  //여러 줄이 선택된 상태로 입력했을 때 지정된 줄들을 지우는 함수
  const range = window.getSelection().getRangeAt(0)
  const startId = range.startContainer.parentNode.id
  const endId = range.endContainer.parentNode.id
  if (startId === endId) {
    return
  }
  event.preventDefault()
  const startOffset = range.startOffset
  const endOffset = range.endOffset
}

export default checkMultiLineSelected
