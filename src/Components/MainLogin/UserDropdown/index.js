import styled from "styled-components"
import DropdownMain from "./DropdownMain"

const DropdownArrow = styled.div`
  left: 157px;
  clip: rect(0px, 18px, 14px, -4px);
  top: -14px;
  position: absolute;
  display: block;
  &::after {
    background: rgb(255, 255, 255);
    box-shadow: rgb(117, 117, 117) -1px -1px 1px -1px;
    content: "";
    transform: rotate(45deg) translate(6px, 6px);
    height: 14px;
    width: 14px;
    display: block;
  }
`

const DropdownWrapper = styled.div`
  position: absolute;
  margin-top: 15px;
  box-shadow: rgb(230, 230, 230) 0px 1px 4px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 700;
  top: 200px;
  left: 40px;
`

const UserDropdown = ({ user, signOut }) => {
  return (
    <DropdownWrapper>
      <DropdownArrow />
      <DropdownMain user={user} signOut={signOut} />
    </DropdownWrapper>
  )
}

export default UserDropdown
