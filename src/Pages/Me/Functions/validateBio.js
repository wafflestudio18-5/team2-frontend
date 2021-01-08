const validateBio = (bio, setErrorMessage) => {
  const bioInput = document.getElementById("bioInput")
  if (bio.length > 300) {
    setErrorMessage((error) => {
      return {
        ...error,
        bioError: "Too long",
      }
    })
    setTimeout(() => {
      bioInput.classList.add("run")
    }, 1)
    setTimeout(() => {
      bioInput.classList.remove("run")
    }, 400)
    return false
  }
  return true
}

export default validateBio
