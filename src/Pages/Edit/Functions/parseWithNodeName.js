const parseWithNodeName = (nodeName, text) => {
  // 입력받은 text를 nodeName에 해당하는 html태그로 양 끝을 둘러쌈
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
