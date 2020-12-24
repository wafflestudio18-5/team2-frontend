import parseWithNodeName from "./parseWithNodeName"

const parseChildNodes = (node) => {
  // node의 모든 childNode를 bold나 italic 정보를 포함해 string으로 변환
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
