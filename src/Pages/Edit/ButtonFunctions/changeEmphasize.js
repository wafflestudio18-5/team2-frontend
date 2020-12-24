import getIdOfCaretPlaced from "../Functions/getIdOfCaretPlaced"

const changeEmphasize = (story, setStory) => {
  const newStory = JSON.parse(JSON.stringify(story))
  const { startId, endId } = getIdOfCaretPlaced(false)
  const [startSection, startContent] = startId
    .split(" ")
    .map((element) => parseInt(element))
  const [endSection, endContent] = endId
    .split(" ")
    .map((element) => parseInt(element))

  let buttonOn = false
  const svgColor = document.getElementById("emphasizeSvg").style.fill
  if (svgColor !== "rgb(255, 255, 255)") {
    buttonOn = true
  }

  for (let si = startSection; si <= endSection; si++) {
    for (let ci = startContent; ci <= endContent; ci++) {
      if (buttonOn) {
        if (newStory[si][ci].detail.emphasizing === "emphasize1") {
          newStory[si][ci].detail.emphasizing = "emphasize2"
        } else {
          newStory[si][ci].detail.emphasizing = "normal"
        }
      } else {
        newStory[si][ci].detail.emphasizing = "emphasize1"
      }
    }
  }
  setStory(newStory)
}

export default changeEmphasize
