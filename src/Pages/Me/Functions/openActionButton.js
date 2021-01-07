const openActionButton = (
  event,
  setIsActionButtonOpen,
  setSelectedStoryId,
  id
) => {
  setSelectedStoryId(id)
  setIsActionButtonOpen(true)
  const menu = document.getElementById("action")
  const rect = event.target.getBoundingClientRect()
  menu.style.top = rect.top + window.scrollY + 25 + "px"
  menu.style.left = rect.left - 47 + window.scrollX + "px"
}

export default openActionButton
