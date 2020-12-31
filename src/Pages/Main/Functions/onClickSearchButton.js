const onClickSearchButton = (isSearchboxOpen, setIsSearchboxOpen, history) => {
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
