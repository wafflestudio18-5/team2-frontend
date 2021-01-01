import styled from "styled-components"
import DropdownMain from "./DropdownMain"

const DropdownArrow = styled.div``

const DropdownWrapper = styled.div`
  position: absolute;
`

const UserDropdown = ({ user }) => {
  return (
    <DropdownWrapper>
      <DropdownArrow />
      <DropdownMain />
    </DropdownWrapper>
  )
}

export default UserDropdown
