import styled from "styled-components"

const ModalInputMessage = styled.p``

const ModalInputStyle = styled.input``

const ModalInput = ({ onChangeEmail }) => {
  return (
    <div>
      <ModalInputMessage>Your email</ModalInputMessage>
      <ModalInputStyle />
    </div>
  )
}

export default ModalInput
