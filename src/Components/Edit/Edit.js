import Header from "./Header"
import Main from "./Main"

const Edit = ({ user, status }) => {
  return (
    <div>
      <Header user={user} status={status} />
      <Main />
    </div>
  )
}

export default Edit
