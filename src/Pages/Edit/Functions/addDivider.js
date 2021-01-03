const addDivider = (id, story, setStory, setCaret) => {
  if (id === "0 0") {
    return
  }
  const [sectionIndex, contentIndex] = id.split(" ").map((e) => parseInt(e))
  let newStory = JSON.parse(JSON.stringify(story))
  newStory.splice(
    sectionIndex,
    1,
    newStory[sectionIndex].slice(0, contentIndex),
    newStory[sectionIndex].slice(contentIndex + 1)
  )
  setCaret({ id: "0 0", offset: 0 })
  setStory(newStory)
}

export default addDivider
