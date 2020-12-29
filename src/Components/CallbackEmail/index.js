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
  alertInvalidInput,
}) => {
  return (
    <DivStyle>
      {tokenStatus === TokenStatus.VALID && (
        <TokenValid
          email={email}
          token={token}
          onClickCreateButton={onClickCreateButton}
          onChangeInput={onChangeInput}
          alertInvalidInput={alertInvalidInput}
        />
      )}
      {tokenStatus === TokenStatus.INVALID && (
        <TokenInvalid
          onChangeInput={onChangeInput}
          alertInvalidInput={alertInvalidInput}
        />
      )}
    </DivStyle>
  )
}

export default CallbackEmail
