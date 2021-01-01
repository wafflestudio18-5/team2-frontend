import styled from "styled-components"
import DropdownUserProfile from "./DropdownUserProfile"
import DropdownLink from "./DropdownLink"
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
  margin: 0;
`

const DividerLi = styled.li``

const LinkLi = styled.li`
  padding: 8px 20px;
`

const DropdownMain = () => {
  return (
    <DivStyle>
      <DropdownUserProfile />
      <DividerLi>
        <DropdownDivider />
      </DividerLi>
      <LinkLi>
        <DropdownLink>Write a story</DropdownLink>
      </LinkLi>
      <LinkLi>
        <DropdownLink>Stories</DropdownLink>
      </LinkLi>
      <LinkLi>
        <DropdownLink>Settings</DropdownLink>
      </LinkLi>
      <DividerLi>
        <DropdownDivider />
      </DividerLi>
      <LinkLi>
        <DropdownLink>Sign out</DropdownLink>
      </LinkLi>
    </DivStyle>
  )
}

export default DropdownMain
