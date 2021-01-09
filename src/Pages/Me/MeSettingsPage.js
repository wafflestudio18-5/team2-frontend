import MeSettings from "../../Components/MeSettings"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Main/Functions/search"
import logout from "../Main/Functions/logout"
import getUserSpec from "./Functions/getUserSpec"
import save from "./Functions/save"

const MeSettingsPage = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  if (token === "" || token === undefined) {
    history.push("/")
  }

  useEffect(() => {
    getCurrentUser(token, setUser)
    getUserSpec(token, setUserSpec)
  }, [token])

  const [user, setUser] = useState({})
  const [userSpec, setUserSpec] = useState({
    name: "",
    bio: "",
    profile_image: "",
  })
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    bioError: "",
    photoError: "",
    generalError: "",
  })

  const onChangeInput = (event) => {
    const { name, value } = event.target
    setUserSpec((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  return (
    <MeSettings
      user={user}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
      isSearchboxOpen={isSearchboxOpen}
      onClickSearchButton={() =>
        onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
      }
      onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
      search={(event) => search(event, searchValue, history)}
      signOut={() => logout(token, removeCookie)}
      userSpec={userSpec}
      onChangeInput={onChangeInput}
      save={() => save(token, userSpec, setUserSpec, setUser, setErrorMessage)}
      errorMessage={errorMessage}
    />
  )
}

export default MeSettingsPage
