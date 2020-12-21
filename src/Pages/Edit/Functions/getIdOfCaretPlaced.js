const getIdOfCaretPlaced = (single = true) => {
  // 커서가 위치한 element와 id를 리턴하는 함수. single이 true이면 시작 커서를 기준, false이면 시작과 끝 모두 리턴
  const range = window.getSelection().getRangeAt(0)

  if (single) {
    let target = range.startContainer
    let id = target.parentNode.id
    while (id === "") {
      target = target.parentNode
      id = target.parentNode.id
    }
    if (id.split(" ").length === 1) {
      id = target.id
    } else {
      target = target.parentNode
    }
    return { id, target }
  } else {
    let startTarget = range.startContainer
    let startId = startTarget.parentNode.id
    let endTarget = range.endContainer
    let endId = endTarget.parentNode.id

    while (startId === "") {
      startTarget = startTarget.parentNode
      startId = startTarget.parentNode.id
    }
    while (endId === "") {
      endTarget = endTarget.parentNode
      endId = endTarget.parentNode.id
    }

    if (startId.split(" ").length === 1) {
      startId = startTarget.id
    } else {
      startTarget = startTarget.parentNode
    }
    if (endId.split(" ").length === 1) {
      endId = endTarget.id
    } else {
      endTarget = endTarget.parentNode
    }
    return { startId, startTarget, endId, endTarget }
  }
}

export default getIdOfCaretPlaced
