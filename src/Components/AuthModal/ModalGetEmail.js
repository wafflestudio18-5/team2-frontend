import ModalContent from "./ModalContent"
import ModalBigWriting from "./ModalBigWriting"
import ModalMediumWriting from "./ModalMediumWriting"
import ModalInput from "./ModalInput"
import ModalTypeConstants from "../../Constants/ModalTypeConstants"

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
      <button
        onClick={() => {
          changeModal(true)
        }}
      >
        All signin options
      </button>
      <button
        onClick={() => {
          switch (ModalType) {
            case ModalTypeConstants.EMAIL_LOG_IN:
              clickContinueButton("log in")
              break
            case ModalTypeConstants.EMAIL_SIGN_UP:
              clickContinueButton("sign up")
              break
            default:
              console.log("invalid modal type")
              break
          }
        }}
      >
        continue
      </button>
    </ModalContent>
  )
}

export default ModalGetEmail
