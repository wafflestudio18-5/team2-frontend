const parseWithNodeName = (nodeName, text) => {
  switch (nodeName) {
    case "EM":
      return "<em>" + text + "</em>"

    case "STRONG":
      return "<strong>" + text + "</strong>"

    default:
      return text
  }
}

export default parseWithNodeName
