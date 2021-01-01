import styled from "styled-components"
import DropdownUserProfile from "./DropdownUserProfile"
import DropdownLink from "./DropdownLink"
import DropdownDivider from "./DropdownDivider"

const DivStyle = styled.ul`
  display: flex;
  max-width: 240px;
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

const DividerLi = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
`

const LinkLi = styled.li`
  padding: 8px 20px;
`

const DropdownMain = ({ user, signOut }) => {
  return (
    <DivStyle>
      <LinkLi>
        <DropdownUserProfile user={user} />
      </LinkLi>
      <DividerLi>
        <DropdownDivider />
      </DividerLi>
      <LinkLi>
        <DropdownLink href="/edit">Write a story</DropdownLink>
      </LinkLi>
      <LinkLi>
        <DropdownLink href="/me/stories">Stories</DropdownLink>
      </LinkLi>
      <LinkLi>
        <DropdownLink href="me/settings">Settings</DropdownLink>
      </LinkLi>
      <DividerLi>
        <DropdownDivider />
      </DividerLi>
      <LinkLi>
        <DropdownLink onClick={signOut}>Sign out</DropdownLink>
      </LinkLi>
    </DivStyle>
  )
}

export default DropdownMain
