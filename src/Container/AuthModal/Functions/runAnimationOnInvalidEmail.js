const runAnimationOnInvalidEmail = () => {
  setTimeout(() => {
    document.getElementById("EmailInputField").classList.add("onAnimation")
  }, 1)

  setTimeout(() => {
    document.getElementById("EmailInputField").classList.remove("onAnimation")
  }, 400)
}

export default runAnimationOnInvalidEmail
