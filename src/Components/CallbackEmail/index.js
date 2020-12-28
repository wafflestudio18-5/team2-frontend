import Header from "./Header"
import TokenInvalid from "./TokenInvalid"
import TokenValid from "./TokenValid"
import TokenStatus from "../../Constants/TokenStatus"

const CallbackEmail = ({ email, tokenStatus, token }) => {
  return (
    <div>
      <Header />
      {tokenStatus === TokenStatus.VALID && (
        <TokenValid email={email} token={token} />
      )}
      {tokenStatus === TokenStatus.INVALID && <TokenInvalid />}
    </div>
  )
}

export default CallbackEmail
