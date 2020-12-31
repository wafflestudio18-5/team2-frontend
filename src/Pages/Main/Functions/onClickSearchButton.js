const onClickSearchButton = (isSearchboxOpen, setIsSearchboxOpen) => {
  if (isSearchboxOpen) {
    setIsSearchboxOpen(false)
  } else {
    setIsSearchboxOpen(true)
  }
}

export default onClickSearchButton
