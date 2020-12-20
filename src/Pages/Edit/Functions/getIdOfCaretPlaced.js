const getIdOfCaretPlaced = (single = true) => {
  const range = window.getSelection().getRangeAt(0)

  if (single) {
    let target = range.startContainer
    let id = target.parentNode.id
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
