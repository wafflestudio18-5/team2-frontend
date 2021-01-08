const validateBio = (bio, setErrorMessage) => {
  if (bio.length > 300) {
    setErrorMessage((error) => {
      return {
        ...error,
        bioError: "Too long",
      }
    })
    return false
  }
  return true
}

export default validateBio
