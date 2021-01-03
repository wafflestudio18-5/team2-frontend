const createImage = (id, url, story, setStory, setShowImageUrlInput) => {
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
  let newStory = JSON.parse(JSON.stringify(story))

  newStory[sectionIndex][contentIndex] = {
    type: "image",
    detail: {
      type: "normal",
      imgsrc: url,
      content: "",
    },
  }
  setStory(newStory)
  setShowImageUrlInput(false)
}

export default createImage
