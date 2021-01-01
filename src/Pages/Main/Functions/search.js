const search = (event, searchValue, history) => {
  // 검색창이 focus 된 상태에서 엔터 키 누르면 검색 페이지로 보냄
  if (event.key === "Enter") {
    history.push("/search?q=" + searchValue)
  }
}

export default search
