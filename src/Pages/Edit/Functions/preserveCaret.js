const preserveCaret = async (f) => {
  const containerEl = document.getElementById("main")
  var oldRange = window.getSelection().getRangeAt(0)
  var preSelectionRange = oldRange.cloneRange()
  preSelectionRange.selectNodeContents(containerEl)
  preSelectionRange.setEnd(oldRange.startContainer, oldRange.startOffset)
  var start = preSelectionRange.toString().length

  const savedSel = {
    start: start,
    end: start + oldRange.toString().length,
  }

  await f()

  var charIndex = 0,
    range = document.createRange()
  range.setStart(containerEl, 0)
  range.collapse(true)
  var nodeStack = [containerEl],
    node,
    foundStart = false,
    stop = false

  while (!stop && (node = nodeStack.pop())) {
    if (node.nodeType === 3) {
      var nextCharIndex = charIndex + node.length
      if (
        !foundStart &&
        savedSel.start >= charIndex &&
        savedSel.start <= nextCharIndex
      ) {
        range.setStart(node, savedSel.start - charIndex)
        foundStart = true
      }
      if (
        foundStart &&
        savedSel.end >= charIndex &&
        savedSel.end <= nextCharIndex
      ) {
        range.setEnd(node, savedSel.end - charIndex)
        stop = true
      }
      charIndex = nextCharIndex
    } else {
      var i = node.childNodes.length
      while (i--) {
        nodeStack.push(node.childNodes[i])
      }
    }
  }

  var sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

export default preserveCaret
