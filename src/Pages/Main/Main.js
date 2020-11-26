import { useState } from "react"
import { Main } from "../../Components/Main"
import { AuthModal } from "../../Components/AuthModal"
import TrendingPosts from "../../Constants/TrendingPosts"

const MainPage = () => {
  // 스크롤 될 때 header 색 변하는 로직
  const [reachScrollCheckPoint, setReachScrollCheckPoint] = useState(false)
  window.addEventListener("scroll", () => {
    let scrollLocation = document.documentElement.scrollTop
    if (scrollLocation >= 400) {
      setReachScrollCheckPoint(true)
    } else {
      setReachScrollCheckPoint(false)
    }
  })

  // AuthModal 화면 표시 여부 관리하는 state
  const [modalShow, setModalShow] = useState(false)

  // 어떤 Modal을 띄울지 결정
  const [ModalType, setModalType] = useState("Login")

  // ModalType을 입력받아 이에 해당하는 Modal을 화면에 표시
  const showModal = (ModalType) => {
    setModalShow(true)
    setModalType(ModalType)
  }

  //Modal 다시 숨김
  const hideModal = () => {
    setModalShow(false)
  }

  return (
    <div>
      <Main
        TrendingPosts={TrendingPosts}
        reachScrollCheckPoint={reachScrollCheckPoint}
        showModal={showModal}
      />
      {modalShow && <AuthModal ModalType={ModalType} />}
    </div>
  )
}

export default MainPage
