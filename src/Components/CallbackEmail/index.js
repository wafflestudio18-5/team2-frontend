import TokenInvalid from "./TokenInvalid"
import TokenValid from "./TokenValid"
import TokenStatus from "../../Constants/TokenStatus"
import styled from "styled-components"

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const CallbackEmail = ({
  email,
  tokenStatus,
  token,
  onClickCreateButton,
  onChangeInput,
}) => {
  return (
    <DivStyle>
      {tokenStatus === TokenStatus.VALID && (
        <TokenValid
          email={email}
          token={token}
          onClickCreateButton={onClickCreateButton}
          onChangeInput={onChangeInput}
        />
      )}
      {tokenStatus === TokenStatus.INVALID && (
        <TokenInvalid onChangeInput={onChangeInput} />
      )}
    </DivStyle>
  )
}

export default CallbackEmail
