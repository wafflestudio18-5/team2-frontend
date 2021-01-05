import styled from "styled-components"
import People from "./People"
import Color from "../../../Constants/Color"

const SidebarWrapper = styled.div`
  width: calc(25% - 10px);
  padding-left: 20px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    display: none;
  }
`

const SidebarHeader = styled.header`
  padding-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 15px;
  font-family: "Noto Sans";
  color: ${Color.black};
  letter-spacing: 0.1em;
  line-height: 1.4;
`

const Sidebar = ({ people }) => {
  return (
    <SidebarWrapper>
      {people[0] && <SidebarHeader>PEOPLE</SidebarHeader>}
      {people[0] && <People person={people[0]} first="true" />}
      {people[1] && <People person={people[1]} first="false" />}
      {people[2] && <People person={people[2]} first="false" />}
    </SidebarWrapper>
  )
}

export default Sidebar
