const validateName = (name, setErrorMessage) => {
  const nameInput = document.getElementById("nameInput")
  const nameTag = document.getElementById("nameTag")
  if (name.length === 0) {
    setErrorMessage((error) => {
      return {
        ...error,
        nameError: "Your name must not be empty.",
      }
    })
    setTimeout(() => {
      nameInput.classList.add("run")
    }, 1)
    setTimeout(() => {
      nameInput.classList.remove("run")
    }, 400)
    return false
  }
  if (name.length > 300) {
    setErrorMessage((error) => {
      return {
        ...error,
        nameError: "Too long",
      }
    })
    setTimeout(() => {
      nameInput.classList.add("run")
      nameTag.classList.add("run")
    }, 1)
    setTimeout(() => {
      nameInput.classList.remove("run")
      nameTag.classList.remove("run")
    }, 400)
    return false
  }
  return true
}

export default validateName
