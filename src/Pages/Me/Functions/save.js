import changeMyInfo from "./changeMyInfo"
import getCurrentUser from "../../Main/Functions/getCurrentUser"
import getUserSpec from "./getUserSpec"
import validateName from "./validateName"
import validateBio from "./validateBio"
import validatePhoto from "./validatePhoto"

const save = (token, userSpec, setUserSpec, setUser, setErrorMessage) => {
  setErrorMessage({
    nameError: "",
    bioError: "",
    photoError: "",
    generalError: "",
  })
  if (
    !validateBio(userSpec.bio, setErrorMessage) ||
    !validateName(userSpec.name, setErrorMessage) ||
    !validatePhoto(userSpec.profile_image, setErrorMessage)
  ) {
    setErrorMessage((error) => {
      return {
        ...error,
        generalError: "Save failed",
      }
    })
    setTimeout(() => {
      document.getElementById("error").classList.add("run")
    }, 1)
    setTimeout(() => {
      document.getElementById("error").classList.remove("run")
    }, 600)
    return
  }
  changeMyInfo(token, userSpec)
  getCurrentUser(token, setUser)
  setTimeout(() => {
    document.getElementById("error").classList.add("run")
  }, 1)
  setTimeout(() => {
    document.getElementById("error").classList.remove("run")
  }, 600)
  getUserSpec(token, setUserSpec)
  setErrorMessage((error) => {
    return {
      ...error,
      generalError: "Saved",
    }
  })
}

export default save
