const parseWithNodeName = (nodeName, text) => {
  if (text === "") {
    return ""
  }
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
