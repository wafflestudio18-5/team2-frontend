import styled from "styled-components"
import DropdownUserProfile from "./DropdownUserProfile"
import DropdownButton from "./DropdownButton"
import DropdownDivider from "./DropdownDivider"

const DivStyle = styled.ul``

const DropdownMain = () => {
  return (
    <DivStyle>
      <DropdownUserProfile />
      <DropdownDivider />
      <DropdownButton>Write a story</DropdownButton>
      <DropdownButton>Stories</DropdownButton>
      <DropdownButton>Settings</DropdownButton>
      <DropdownDivider />
      <DropdownButton>Sign out</DropdownButton>
    </DivStyle>
  )
}

export default DropdownMain
