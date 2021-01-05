import styled from "styled-components"
import Button from "./Button"
import BoldButton from "./BoldButton"

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const MainButtons = ({ type, searchWord }) => {
  if (type === "story") {
    return (
      <ButtonWrapper>
        <BoldButton>Stories</BoldButton>
        <Button href={"/search/users/?q=" + searchWord}>People</Button>
      </ButtonWrapper>
    )
  } else {
    return (
      <ButtonWrapper>
        <Button href={"/search/?q=" + searchWord}>Stories</Button>
        <BoldButton>People</BoldButton>
      </ButtonWrapper>
    )
  }
}

export default MainButtons
