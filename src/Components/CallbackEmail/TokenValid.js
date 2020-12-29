import styled from "styled-components"
import BigWriting from "./BigWriting"
import MediumWriting from "./MediumWriting"
import SmallWriting from "./SmallWriting"
import Input from "./Input"
import Button from "./Button"

const DivStyle = styled.div`
  text-align: center;
  padding: 100px 60px;
`

const TokenValid = ({
  email,
  onClickCreateButton,
  onChangeInput,
  alertInvalidInput,
}) => {
  return (
    <DivStyle>
      <BigWriting>Almost there!</BigWriting>
      <MediumWriting>
        Finish creating your account for the full Medium experience.
      </MediumWriting>
      <SmallWriting alertInvalidInput={alertInvalidInput}>
        Your full name
      </SmallWriting>
      <Input
        id="EmailInputField"
        onChange={onChangeInput}
        alertInvalidInput={alertInvalidInput}
      />
      <SmallWriting>Your email</SmallWriting>
      <MediumWriting>{email}</MediumWriting>
      <Button onClick={onClickCreateButton}>Create account</Button>
    </DivStyle>
  )
}

export default TokenValid
