import MeStories from "../../Components/MeStories"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useHistory, useLocation } from "react-router-dom"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Main/Functions/search"
import logout from "../Main/Functions/logout"

const MeStiresDraft = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()
  const type = useLocation().pathname.split("/")[2]
  // drafts | public

  if (token === "" || token === undefined) {
    // 로그인 하지 않았으면 main page로 redirect
    history.push("/")
  }
  // states
  // user
  const [user, setUser] = useState({})
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  useEffect(() => {
    getCurrentUser(token, setUser)
  }, [token])

  return (
    <MeStories
      type={type}
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
      history={history}
    />
  )
}

export default MeStiresDraft
