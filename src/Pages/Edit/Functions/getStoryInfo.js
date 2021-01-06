const getStoryInfo = (story) => {
  let storyInfo = { title: "", subtitle: "", featured_image: "" }

  let contentList = []
  story.forEach((section) => {
    contentList = contentList.concat(section)
  })

  contentList.forEach((content, index) => {
    if (content.type === "image") {
      if (storyInfo.featured_image === "") {
        storyInfo.featured_image = content.detail.imgsrc
      }
    } else {
      if (storyInfo.title === "") {
        storyInfo.title = content.detail.content
      } else if (storyInfo.subtitle === "") {
        storyInfo.subtitle = content.detail.content
      }
    }
  })

  if (storyInfo.subtitle === "") {
    storyInfo.subtitle = storyInfo.title
  }
  storyInfo.subtitle = storyInfo.subtitle.split(".")[0]
  if (storyInfo.subtitle.length > 140) {
    storyInfo.subtitle = storyInfo.subtitle.slice(0, 137) + "..."
  }
  if (storyInfo.title.length > 100) {
    storyInfo.title = ""
  }

  return storyInfo
}

export default getStoryInfo
