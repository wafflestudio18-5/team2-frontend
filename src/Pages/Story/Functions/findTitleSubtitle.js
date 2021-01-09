const findTitleSubtitle = (story) => {
  let storylist = JSON.parse(JSON.stringify(story))
  let title = "",
    subtitle = ""
  if (story.length === 0) {
    return { storylist, title, subtitle }
  }
  const section = storylist[0]
  let contentIndex = 0
  var currentContent
  while (true) {
    currentContent = section[contentIndex]
    if (currentContent === undefined || currentContent.type !== "paragraph") {
      break
    }
    contentIndex++
    if (title === "") {
      if (currentContent.detail.emphasizing === "largest") {
        title = currentContent.detail.content
        storylist[0].splice(contentIndex - 1, 1)
        currentContent = section[contentIndex - 1]
        if (
          currentContent === undefined ||
          currentContent.type !== "paragraph" 
          
        ) {
          break
        }
        if (subtitle === "" && currentContent.detail.emphasizing === "large") {
          subtitle = currentContent.detail.content
          storylist[0].splice(contentIndex - 1, 1)
        }
        break
      } else {
        break
      }
    }
  }
  return { storylist, title, subtitle }
}
export default findTitleSubtitle