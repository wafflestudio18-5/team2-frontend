import ModalContent from "./ModalContent"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import OkButton from "./OkButton"

const ModalEmailSent = ({ ModalType, email, hideModal }) => {
  return (
    <ModalContent>
      <ModalBigWriting ModalType={ModalType} />
      <ModalMediumWriting ModalType={ModalType} email={email} />
      <OkButton hideModal={hideModal} />
    </ModalContent>
  )
}

export default ModalEmailSent
