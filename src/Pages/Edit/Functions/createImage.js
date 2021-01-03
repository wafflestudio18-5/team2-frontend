const createImage = (id, url, story, setStory, setShowImageUrlInput) => {
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
  let newStory = JSON.parse(JSON.stringify(story))

  newStory[sectionIndex].splice(
    contentIndex,
    1,
    {
      type: "image",
      detail: {
        size: "normal",
        imgsrc: url,
        content: "",
      },
    },
    {
      type: "paragraph",
      detail: {
        emphasizing: "normal",
        content: "",
      },
    }
  )
  setStory(newStory)
  setShowImageUrlInput(false)
}

export default createImage
