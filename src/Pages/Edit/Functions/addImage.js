const addImage = (id, story, setStory) => {
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
  let newStory = JSON.parse(JSON.stringify(story))

  newStory[sectionIndex].splice(contentIndex, 1, {})
}

export default addImage
