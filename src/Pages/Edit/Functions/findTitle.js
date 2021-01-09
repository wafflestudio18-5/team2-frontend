const findTitle = (s) => {
  let checker = true
  let result = JSON.parse(JSON.stringify(s))
  let firstSection = JSON.parse(JSON.stringify(s[0]))
  firstSection = firstSection.map((content) => {
    if (content.type !== "paragraph") {
      return {
        type: "paragraph",
        detail: {
          emphasizing: "normal",
          content: "",
        },
      }
    } else {
      return content
    }
  })

  mainLoop: for (let i = 0; i < firstSection.length; i++) {
    if (!checker) {
      break
    }
    if (firstSection[i].type === "paragraph") {
      checker = false

      switch (firstSection[i].detail.emphasizing) {
        case "largest":
          result[0][i].detail.emphasizing = "title"
          if (firstSection.length === i + 1) {
            break mainLoop
          }
          if (firstSection[i + 1].detail.emphasizing === "large") {
            result[0][i + 1].detail.emphasizing = "subtitle"
          }
          break mainLoop

        case "large":
          if (firstSection.length > 1) {
            if (firstSection[i + 1].detail.emphasizing === "largest") {
              result[0][i].detail.emphasizing = "kicker"
              result[0][i + 1].detail.emphasizing = "title"
              if (
                firstSection.length > i + 2 &&
                firstSection[i + 2].detail.emphasizing === "large"
              ) {
                result[0][i + 2].detail.emphasizing = "subtitle"
              }
            }
          }

          break mainLoop

        default:
          break mainLoop
      }
    }
  }
  return result
}

export default findTitle
