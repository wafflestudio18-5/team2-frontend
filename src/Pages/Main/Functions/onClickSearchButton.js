const onClickSearchButton = (isSearchboxOpen, setIsSearchboxOpen) => {
  if (isSearchboxOpen) {
    setIsSearchboxOpen(false)
  } else {
    setIsSearchboxOpen(true)
    setTimeout(() => {
      document.getElementById("Searchbox").focus()
    }, 140)
  }
}

export default onClickSearchButton
