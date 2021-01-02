const onClickSearchButton = (isSearchboxOpen, setIsSearchboxOpen, history) => {
  // 검색(돋보기 모양)버튼 클릭 시 window가 충분히 크면 검색창을 보여주고 작으면 바로 /search 페이지로 보냄
  if (window.innerWidth > 904) {
    if (isSearchboxOpen) {
      setIsSearchboxOpen(false)
    } else {
      setIsSearchboxOpen(true)
      setTimeout(() => {
        document.getElementById("Searchbox").focus()
      }, 140)
    }
  } else {
    history.push("/search")
  }
}

export default onClickSearchButton
