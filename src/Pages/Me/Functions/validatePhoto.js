import validateBio from "./validateName"

const validatePhoto = (photo, setErrorMessage) => {
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
    return false
  }
  return true
}

export default validatePhoto
