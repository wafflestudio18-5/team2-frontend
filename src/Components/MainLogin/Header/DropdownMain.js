import styled from "styled-components"
import DropdownUserProfile from "./DropdownUserProfile"
import DropdownButton from "./DropdownButton"
import DropdownDivider from "./DropdownDivider"

const DivStyle = styled.ul`
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: stretch;
  list-style: none;
`

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
