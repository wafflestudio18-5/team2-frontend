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

const ButtonWrapper = ({ buttonFunctions, activated }) => {
  return (
    <ButtonWrapperStyle>
      <Button
        type="bold"
        buttonFunctions={buttonFunctions}
        activated={activated}
      />
      <Button
        type="italic"
        buttonFunctions={buttonFunctions}
        activated={activated}
      />
      <ButtonDivider />
      <Button
        type="largest"
        buttonFunctions={buttonFunctions}
        activated={activated}
      />
      <Button
        type="large"
        buttonFunctions={buttonFunctions}
        activated={activated}
      />
      <Button
        type="emphasize"
        buttonFunctions={buttonFunctions}
        activated={activated}
      />
    </ButtonWrapperStyle>
  )
}

export default ButtonWrapper
