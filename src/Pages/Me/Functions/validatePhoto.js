const validatePhoto = (photo, setErrorMessage) => {
  const photoInput = document.getElementById("photoInput")
  const photoTag = document.getElementById("photoTag")
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  )
  if (!pattern.test(photo)) {
    setErrorMessage((error) => {
      return {
        ...error,
        photoError: "Image url is invalid.",
      }
    })
    setTimeout(() => {
      photoInput.classList.add("run")
    }, 1)
    setTimeout(() => {
      photoInput.classList.remove("run")
    }, 400)
    return false
  }
  return true
}

export default validatePhoto
