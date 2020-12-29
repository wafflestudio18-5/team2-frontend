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
      <MediumWriting>Please try again.</MediumWriting>
    </DivStyle>
  )
}

export default TokenInvalid
