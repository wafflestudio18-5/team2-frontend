const moveCaret = ({ id, offset }) => {
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
