import styled from "styled-components"

const ModalInputMessage = styled.p``

const ModalInputStyle = styled.input``

const ModalInput = ({ updateEmailOnChange }) => {
  return (
    <div>
      <ModalInputMessage>Your email</ModalInputMessage>
      <ModalInputStyle onChange={updateEmailOnChange} />
    </div>
  )
}

export default ModalInput
