import Header from "./Header"
import TokenInvalid from "./TokenInvalid"
import TokenValid from "./TokenValid"
import TokenStatus from "../../Constants/TokenStatus"
import styled from "styled-components"

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CallbackEmail = ({ email, tokenStatus, token }) => {
  return (
    <DivStyle>
      <Header />
      {tokenStatus === TokenStatus.VALID && (
        <TokenValid email={email} token={token} />
      )}
      {tokenStatus === TokenStatus.INVALID && <TokenInvalid />}
    </DivStyle>
  )
}

export default CallbackEmail
