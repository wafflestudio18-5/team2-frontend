import ModalContent from "./ModalContent"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"

const ModalEmailSent = ({ ModalType, email }) => {
  return (
    <ModalContent>
      <ModalBigWriting ModalType={ModalType} />
      <ModalMediumWriting ModalType={ModalType} email={email} />
    </ModalContent>
  )
}

export default ModalEmailSent
