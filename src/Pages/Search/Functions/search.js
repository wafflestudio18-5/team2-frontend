const search = (event, inputValue, history, user = false) => {
  // 검색창에서 엔터 키 누를 시 검색시작
  if (event.key === "Enter") {
    if (user) {
      history.push("/search/users/?q=" + inputValue)
    } else {
      history.push("/search/?q=" + inputValue)
    }
  }
}

export default search
