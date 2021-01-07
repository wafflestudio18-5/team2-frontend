import styled from "styled-components"

const ModalBackground = styled.div``

const ModalContent = styled.div``

const BigMessage = styled.h1``

const Message = styled.h4``

const Button = styled.button``

const RedButton = styled.button``

const ConfirmModal = ({ deleteStory, hideConfirmModal }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <BigMessage>Delete story</BigMessage>
        <Message>Are you sure you want to delete this story?</Message>
        <Button onClick={hideConfirmModal}>Cancel</Button>
        <RedButton onClick={deleteStory}>Delete</RedButton>
      </ModalContent>
    </ModalBackground>
  )
}

export default ConfirmModal
