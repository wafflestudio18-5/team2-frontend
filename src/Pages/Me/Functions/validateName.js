const validateName = (name, setErrorMessage) => {
  if (name.length === 0) {
    setErrorMessage((error) => {
      return {
        ...error,
        nameError: "Your name must not be empty.",
      }
    })
    return false
  }
  if (name.length > 300) {
    setErrorMessage((error) => {
      return {
        ...error,
        nameError: "Too long",
      }
    })
    return false
  }
  return true
}

export default validateName
