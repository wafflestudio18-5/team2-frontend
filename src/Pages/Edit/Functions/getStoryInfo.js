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

  return storyInfo
}

export default getStoryInfo
