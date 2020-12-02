import Header from "./Header"
import Main from "./Main"

const Write = ({ userName, status }) => {
  return (
    <div>
      <Header userName={userName} status={status} />
      <Main />
    </div>
  )
}

export default Write
