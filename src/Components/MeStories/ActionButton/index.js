import styled from "styled-components"

const ActionButtonBackground = styled.div``

const ActionButtonWrapper = styled.div``

const Arrow = styled.div``

const ActionButtonMenu = styled.div``

const Link = styled.a``

const Button = styled.button``

const ActionButton = ({
  deleteStory,
  selectedStoryId,
  type,
  closeActionButton,
}) => {
  var word
  if (type === "drafts") {
    word = "draft"
  } else if (type === "public") {
    word = "story"
  }
  return (
    <ActionButtonBackground onClick={closeActionButton}>
      <ActionButtonWrapper>
        <Arrow />
        <ActionButtonMenu>
          <Link href={"/edit/" + selectedStoryId}>{"Edit " + word}</Link>
          <Button onClick={deleteStory}>{"Delete " + word}</Button>
        </ActionButtonMenu>
      </ActionButtonWrapper>
    </ActionButtonBackground>
  )
}

export default ActionButton
