const enter = (event, inputValue, history) => {
  // 검색창에서 엔터 키 누를 시 검색시작
  if (event.key === "Enter") {
    history.push("/search?q=" + inputValue)
  }
}

export default enter
