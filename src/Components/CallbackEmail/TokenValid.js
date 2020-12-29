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

const TokenValid = ({ email, token, onClickCreateButton, onChangeInput }) => {
  return (
    <DivStyle>
      <BigWriting>Almost there!</BigWriting>
      <MediumWriting>
        Finish creating your account for the full Medium experience.
      </MediumWriting>
      <SmallWriting>Your full name</SmallWriting>
      <Input id="EmailInputField" onChange={onChangeInput} />
      <SmallWriting>Your email</SmallWriting>
      <MediumWriting>{email}</MediumWriting>
      <Button onClick={onClickCreateButton}>Create account</Button>
    </DivStyle>
  )
}

export default TokenValid
