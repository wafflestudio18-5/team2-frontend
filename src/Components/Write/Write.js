import Header from "./Header"
import Main from "./Main"

const Write = ({ user, status }) => {
  return (
    <div>
      <Header user={user} status={status} />
      <Main />
    </div>
  )
}

export default Write
