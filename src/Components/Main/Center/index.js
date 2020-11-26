import CenterWrapper from "./CenterWrapper"
import CenterContents from "./CenterContents"
import CenterWriting from "./CenterWriting"

const Center = ({ showModal }) => {
  return (
    <CenterWrapper>
      <CenterContents>
        <CenterWriting showModal={showModal} />
      </CenterContents>
    </CenterWrapper>
  )
}

export default Center
