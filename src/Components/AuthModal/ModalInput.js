import styled from "styled-components"

const ModalInputMessage = styled.p``

const ModalInputStyle = styled.input``

const ModalInput = ({ updateEmailOnChange, alertWrongEmail }) => {
  return (
    <div>
      <ModalInputMessage alertWrongEmail={alertWrongEmail}>
        Your email
      </ModalInputMessage>
      <ModalInputStyle
        alertWrongEmail={alertWrongEmail}
        onChange={updateEmailOnChange}
      />
      {alertWrongEmail && <p>wrong email</p>}
    </div>
  )
}

export default ModalInput
