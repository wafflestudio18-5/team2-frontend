import ModalContent from "./ModalContent"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalInput from "./ModalInput"
import GreenLink from "./GreenLink"
import ContinueButton from "./ContinueButton"

const ModalGetEmail = ({
  ModalType,
  updateEmailOnChange,
  alertWrongEmail,
  changeModal,
  clickContinueButton,
}) => {
  return (
    <ModalContent>
      <ModalBigWriting ModalType={ModalType} />
      <ModalMediumWriting ModalType={ModalType} />
      <ModalInput
        updateEmailOnChange={updateEmailOnChange}
        alertWrongEmail={alertWrongEmail}
      />
      <ContinueButton
        ModalType={ModalType}
        clickContinueButton={clickContinueButton}
      />
      <GreenLink changeModal={changeModal} ModalType={ModalType} />
    </ModalContent>
  )
}

export default ModalGetEmail
