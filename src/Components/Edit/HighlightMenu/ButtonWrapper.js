import styled from "styled-components"
import Button from "./Button"
import ButtonDivider from "./ButtonDivider"

const ButtonWrapperStyle = styled.div`
  position: relative;
  background-image: linear-gradient(to bottom, rgba(49, 49, 47, 0.99), #262625);
  background-repeat: repeat-x;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

const ButtonWrapper = ({ buttonFunctions }) => {
  return (
    <ButtonWrapperStyle>
      <Button type="bold" buttonFunctions={buttonFunctions} />
      <Button type="italic" buttonFunctions={buttonFunctions} />
      <ButtonDivider />
      <Button type="largest" buttonFunctions={buttonFunctions} />
      <Button type="large" buttonFunctions={buttonFunctions} />
      <Button type="emphasize" buttonFunctions={buttonFunctions} />
    </ButtonWrapperStyle>
  )
}

export default ButtonWrapper
