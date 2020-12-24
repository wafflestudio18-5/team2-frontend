const createNewContentMultiLineSelected = (
  // 여러 줄이 선택된 상태에서 엔터키를 입력한 경우 그 줄들을 지우고 새로운 빈 줄을 생성
  // newStory: createNewContent 함수 안에서 실행되기 때문에 story가 아닌, 그것을 복사한 newStory를 입력받음.
  // startId, endId: range의 양 끝이 각각 위치한 content의 id
  // frontContent, endContent: range 기준 앞과 뒤의 content
  newStory,
  startId,
  endId,
  frontContent,
  backContent
) => {
  const [startSection, startContent] = startId
    .split(" ")
    .map((e) => parseInt(e))
  const [endSection, endContent] = endId.split(" ").map((e) => parseInt(e))

  const startEmphasizing =
    newStory[startSection][startContent].detail.emphasizing
  const endEmphasizing = newStory[endSection][endContent].detail.emphasizing

  if (startSection !== endSection) {
    newStory[startSection].splice(
      startContent,
      Infinity,
      {
        type: "paragraph",
        detail: {
          content: frontContent,
          emphasizing: startEmphasizing,
        },
      },
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "normal",
        },
      }
    )
    newStory[endSection].splice(0, endSection + 1, {
      type: "paragraph",
      detail: {
        content: backContent,
        emphasizing: endEmphasizing,
      },
    })
  } else {
    newStory[startSection].splice(
      startContent,
      endContent - startContent + 1,
      {
        type: "paragraph",
        detail: {
          content: frontContent,
          emphasizing: startEmphasizing,
        },
      },
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "normal",
        },
      },
      {
        type: "paragraph",
        detail: {
          content: backContent,
          emphasizing: endEmphasizing,
        },
      }
    )
  }
}

export default createNewContentMultiLineSelected
