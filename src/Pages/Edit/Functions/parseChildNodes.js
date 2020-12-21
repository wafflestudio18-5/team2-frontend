import parseWithNodeName from "./parseWithNodeName"

const parseChildNodes = (node) => {
  if (node.nodeType === 3) {
    return node.textContent
  } else {
    let result = ""
    node.childNodes.forEach((childNode) => {
      result = result + parseChildNodes(childNode)
    })
    return parseWithNodeName(node.nodeName, result)
  }
}

export default parseChildNodes
