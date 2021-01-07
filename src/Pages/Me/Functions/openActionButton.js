const openActionButton = (setIsActionButtonOpen, setSelectedStoryId, id) => {
  console.log(id)
  setSelectedStoryId(id)
  setIsActionButtonOpen(true)
}

export default openActionButton
