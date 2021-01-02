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

  @media (max-width: 903.98px) {
    left: 173px;
  }

  @media (max-width: 727.98px) {
    left: 197px;
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
  top: 73px;
  left: ${(props) => props.left};
  will-change: left;

  @media (max-width: 727.98px) {
    top: 68px;
  }
`

const UserDropdown = ({ user, signOut }) => {
  let left =
    document.getElementById("userProfile").getBoundingClientRect().left - 150
  if (window.innerWidth < 904) {
    if (window.innerWidth < 728) {
      left -= 40
    } else {
      left -= 16
    }
  }
  return (
    <DropdownWrapper id="dropdown" left={left + "px"}>
      <DropdownArrow />
      <DropdownMain user={user} signOut={signOut} />
    </DropdownWrapper>
  )
}

export default UserDropdown
