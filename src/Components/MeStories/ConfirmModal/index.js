import styled from "styled-components"
import Color from "../../../Constants/Color"

const ModalBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  margin-bottom: auto;
  margin-top: auto;
  padding: 64px;
  width: 900px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  min-height: 550px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 904px) {
    width: 720px;
  }

  @media (max-width: 728px) {
    width: 540px;
  }

  @media (max-width: 552px) {
    width: 320px;
  }
`

const BigMessage = styled.h1`
  margin: 0;
  line-height: 36px;
  font-size: 32px;
  color: ${Color.borderBlack};
  font-weight: 700;
  font-family: "Noto Sans";
`

const Message = styled.h4`
  margin: 0;
  padding-top: 6px;
  padding-bottom: 36px;
  line-height: 24px;
  font-size: 18px;
  color: ${Color.gray};
  font-weight: 400;
  font-family: "Noto Sans";
`

const ButtonWrapper = styled.div``

const Button = styled.button`
  padding: 9px 16px 7px;
  box-sizing: border-box;
  border: 1px solid ${Color.gray};
  background: 0;
  color: ${Color.borderBlack};
  line-height: 20px;
  font-size: 15px;
  font-family: "Noto Sans";
  border-radius: 4px;
  cursor: pointer;
`

const RedButton = styled.button`
  margin-left: 8px;
  padding: 9px 16px 7px;
  box-sizing: border-box;
  border: 1px solid ${Color.red};
  background: ${Color.red};
  color: white;
  line-height: 20px;
  font-size: 15px;
  font-family: "Noto Sans";
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: ${Color.hoverRed};
    background: ${Color.hoverRed};
  }
`

const ConfirmModal = ({ deleteStory, hideConfirmModal }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <BigMessage>Delete story</BigMessage>
        <Message>Are you sure you want to delete this story?</Message>
        <ButtonWrapper>
          <Button onClick={hideConfirmModal}>Cancel</Button>
          <RedButton onClick={deleteStory}>Delete</RedButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalBackground>
  )
}

export default ConfirmModal
