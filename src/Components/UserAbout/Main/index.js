import MainBig from "./MainBig"
import MainSmall from "./MainSmall"

const Main = ({ user }) => {
  return (
    <div>
      <MainBig user={user} />
      <MainSmall user={user} />
    </div>
  )
}

export default Main
