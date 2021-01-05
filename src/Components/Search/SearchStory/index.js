import styled from "styled-components"
import Main from "../Main"
import Sidebar from "../Sidebar"

const DivStyle = styled.div``

const SearchStory = ({ stories, people }) => {
  return (
    <DivStyle>
      <Main stories={stories} type="story" />
      <Sidebar people={people} />
    </DivStyle>
  )
}

export default SearchStory
