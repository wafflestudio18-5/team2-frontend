const moveCaret = ({ id, offset }) => {
  const newRange = document.createRange()
  let node = document.getElementById(id).firstChild
  if (node === null) {
    node = document.getElementById(id)
  }
  newRange.setStart(node, offset)
  newRange.setEnd(node, offset)

  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(newRange)
}

export default moveCaret
