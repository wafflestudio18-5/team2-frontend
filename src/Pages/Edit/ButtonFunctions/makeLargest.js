import getIdOfCaretPlaced from "../Functions/getIdOfCaretPlaced"

const makeLargest = (emphasize, story, setStory) => {
  const newStory = JSON.parse(JSON.stringify(story))
  const { startId, endId } = getIdOfCaretPlaced(false)
  const [startSection, startContent] = startId
    .split(" ")
    .map((element) => parseInt(element))
  const [endSection, endContent] = endId
    .split(" ")
    .map((element) => parseInt(element))

  for (let si = startSection; si <= endSection; si++) {
    for (let ci = startContent; ci <= endContent; ci++) {
      if (emphasize === "largest") {
        newStory[si][ci].detail.emphasizing = "normal"
      } else {
        newStory[si][ci].detail.emphasizing = "largest"
      }
    }
  }
  setStory(newStory)
}

export default makeLargest
