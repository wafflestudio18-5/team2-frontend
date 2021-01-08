import MeSettings from "../../Components/MeSettings"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Main/Functions/search"

const MeSettingsPage = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  if (token === "" || token === undefined) {
    // 로그인 하지 않았으면 main page로 redirect
    history.push("/")
  }

  useEffect(() => {
    getCurrentUser(token, setUser)
  }, [token])

  // states
  // user
  const [user, setUser] = useState({})
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

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
    />
  )
}

export default MeSettingsPage
