import parseChildNodes from "./parseChildNodes"
import parseWithNodeName from "./parseWithNodeName"

const getIdOfCaretPlaced = (single = true) => {
  // 커서가 위치한 element와 id를 리턴하는 함수. single이 true이면 시작 커서를 기준, false이면 시작과 끝 모두 리턴
  const range = window.getSelection().getRangeAt(0)

  let startTarget = range.startContainer
  let startId = startTarget.id
  let startNodeIndex = range.startOffset
  let frontContent = startTarget.textContent.slice(0, startNodeIndex)
  let offsetList = [startNodeIndex]
  let tempStart = startTarget

  while (startId === undefined || startId === "") {
    startNodeIndex = 0
    while (true) {
      tempStart = tempStart.previousSibling
      if (tempStart !== null) {
        startNodeIndex++
        frontContent = parseChildNodes(tempStart) + frontContent
      } else {
        break
      }
    }
    startTarget = startTarget.parentNode
    frontContent = parseWithNodeName(startTarget.nodeName, frontContent)
    tempStart = startTarget
    startId = startTarget.id
    offsetList.unshift(startNodeIndex)
  }

  let endTarget = range.endContainer
  let endId = endTarget.id
  let endNodeIndex = range.endOffset
  let backContent = endTarget.textContent.slice(endNodeIndex)
  let tempEnd = endTarget

  while (endId === undefined || endId === "") {
    while (true) {
      tempEnd = tempEnd.nextSibling
      if (tempEnd !== null) {
        backContent = backContent + parseChildNodes(tempEnd)
      } else {
        break
      }
    }
    endTarget = endTarget.parentNode
    backContent = parseWithNodeName(endTarget.nodeName, backContent)
    tempEnd = endTarget
    endId = endTarget.id
  }

  if (single) {
    return {
      id: startId,
      target: startTarget,
      frontContent,
      backContent,
      offsetList,
    }
  } else {
    return {
      startId,
      endId,
      startTarget,
      endTarget,
      frontContent,
      backContent,
      offsetList,
    }
  }
}

export default getIdOfCaretPlaced
