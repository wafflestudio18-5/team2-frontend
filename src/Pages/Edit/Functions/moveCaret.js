const moveCaret = ({ id, offset }) => {
  const newRange = document.createRange()
  let node = document.getElementById(id)

  while (offset.length > 1) {
    node = node.childNodes[offset.shift()]
  }

  newRange.setStart(node, offset)
  newRange.setEnd(node, offset)

  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(newRange)
}

export default moveCaret
