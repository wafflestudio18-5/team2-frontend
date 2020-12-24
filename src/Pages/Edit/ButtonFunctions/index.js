import changeEmphasize from "./changeEmphasize"
import makeBold from "./makeBold"
import makeItalic from "./makeItalic"
import makeLarge from "./makeLarge"
import makeLargest from "./makeLargest"

const buttonFunctions = (story, setStory) => {
  return {
    changeEmphasize,
    makeBold,
    makeItalic,
    makeLargest,
    makeLarge,
    story,
    setStory,
  }
}

export default buttonFunctions
