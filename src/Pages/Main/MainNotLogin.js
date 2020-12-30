import { useEffect, useState } from "react"
import Main from "../../Components/Main"
import AuthModalContainer from "../../Container/AuthModal"
import TrendingPosts from "../../Constants/TrendingPosts"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"
import Articles from "../../Constants/Articles"
import Topics from "../../Constants/Topics"
import handleScroll from "./Functions/handleScroll"
import hideModal from "./Functions/hideModal"
import showModal from "./Functions/showModal"

const MainNotLoginPage = () => {
  //로그인 하지 않았을 때 페이지

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
  // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
  const [modalVisible, setModalVisible] = useState(false)
  // modal type을 결정하는 state
  const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN)

  // Modal이 떠있는 동안 scroll 고정
  useEffect(() => {
    if (modalVisible === true) {
      document.body.style.cssText = `overflow: hidden; top: -${window.scrollY}px`
      return () => {
        const scrollY = document.body.style.top
        document.body.style.cssText = `position: ""; top: "";`
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [modalVisible])

  const [Article, setArticle] = useState(Articles)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll(fetching, setFetching, Article, setArticle)
    )
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(fetching, setFetching, Article, setArticle)
      )
    }
  })

  return (
    <div>
      <Main
        TrendingPosts={TrendingPosts}
        reachScrollCheckPoint={reachScrollCheckPoint}
        Articles={Article}
        Topics={Topics}
        showModal={(modalType) =>
          showModal(modalType, setModalShow, setModalVisible, setModalType)
        }
      />
      {modalShow && (
        <AuthModalContainer
          hideModal={() => hideModal(setModalVisible, setModalShow)}
          modalVisible={modalVisible}
          ModalType={ModalType}
        />
      )}
    </div>
  )
}

export default MainNotLoginPage
