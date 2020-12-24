const moveCaret = ({ id, offset }) => {
  // id와 offset을 입력받아 그에 해당하는 위치로 caret을 옮김
  // id: content의 id
  // offset: array of number. id에 해당하는 node부터 이동시키고자 하는 node까지 node index를 모아둔 array
  const newRange = document.createRange()
  let node = document.getElementById(id)

  while (node.childElementCount > 0 && offset.length > 1) {
    node = node.childNodes[offset.shift()]
  }

  newRange.setStart(node, offset[0])
  newRange.setEnd(node, offset[0])

  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(newRange)
}

export default moveCaret
