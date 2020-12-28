import styled from "styled-components"
import BigWriting from "./BigWriting"
import MediumWriting from "./MediumWriting"
import SmallWriting from "./SmallWriting"
import Input from "./Input"
import Button from "./Button"

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 60px;
`

const TokenInvalid = () => {
  return (
    <DivStyle>
      <BigWriting>Your sign in link has expired</BigWriting>
      <MediumWriting>
        Enter the email address associated with your account, and we’ll send a
        new magic link to your inbox.
      </MediumWriting>
      <SmallWriting alertWrongEmail={false}>Your email</SmallWriting>
      <Input alertWrongEmail={false} />
      <Button>Continue</Button>
    </DivStyle>
  )
}

export default TokenInvalid
