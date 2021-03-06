import styled from "styled-components"
import DropdownContent from "./DropdownContent"

const Background = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const UserDropdown = ({ hideDropdown, ...props }) => {
  return (
    <Background onClick={hideDropdown}>
      <DropdownContent {...props} />
    </Background>
  )
}

export default UserDropdown
