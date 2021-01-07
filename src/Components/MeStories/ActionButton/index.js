import styled from "styled-components"
import Color from "../../../Constants/Color"

const ActionButtonBackground = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  display: ${(props) => !props.isActionButtonOpen && "none"};
`

const ActionButtonWrapper = styled.div`
  position: absolute;
  box-shadow: rgb(230, 230, 230) 0px 1px 4px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 700;
  background: rgb(255, 255, 255);
`

const Arrow = styled.div`
  z-index: 500;
  left: 50px;
  clip: rect(0px, 18px, 14px, -4px);
  top: -14px;
  position: absolute;
  display: block;
  background: rgb(255, 255, 255);
  box-shadow: rgb(117, 117, 117) -1px -1px 1px -1px;
  transform: rotate(45deg) translate(6px, 6px);
  height: 14px;
  width: 14px;
`

const ActionButtonMenu = styled.div`
  z-index: 600;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`

const Button = styled.button`
  padding: 8px 20px;
  border: 0;
  background: 0;
  cursor: pointer;
  color: ${Color.gray};
  line-height: 20px;
  font-size: 14px;
  &:hover {
    color: ${Color.borderBlack};
  }
`

const ActionButton = ({
  deleteStory,
  selectedStoryId,
  type,
  closeActionButton,
  isActionButtonOpen,
  startEdit,
}) => {
  var word
  if (type === "drafts") {
    word = "draft"
  } else if (type === "public") {
    word = "story"
  }
  return (
    <ActionButtonBackground
      onClick={closeActionButton}
      isActionButtonOpen={isActionButtonOpen}
    >
      <ActionButtonWrapper id="action">
        <Arrow />
        <ActionButtonMenu>
          <Button onClick={startEdit}>{"Edit " + word}</Button>
          <Button onClick={deleteStory}>{"Delete " + word}</Button>
        </ActionButtonMenu>
      </ActionButtonWrapper>
    </ActionButtonBackground>
  )
}

export default ActionButton
