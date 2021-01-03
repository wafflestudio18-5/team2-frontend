const findTitle = (s) => {
  // story를 입력받아 kicker, title, subtitle이 표시될지 아닐지 판단한 후 적절히 수정해 리턴
  // 이후 각 컴포넌트들은 이 함수를 거쳐 수정된 story를 가지고 출력하게 됨.
  // index 관련 에러 발생
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
