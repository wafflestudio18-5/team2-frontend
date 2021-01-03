import styled from "styled-components"
import ButtonSvg from "./ButtonSvg"
import FunctionButton from "./FunctionButton"
import MainButton from "./MainButton"
import getIdOfCaretPlaced from "../../../Pages/Edit/Functions/getIdOfCaretPlaced"

const ButtonWrapper = styled.div`
  position: absolute;
`

const AddContentButton = ({ addImage, addDivider }) => {
  const clickMainButton = () => {
    const mainButton = document.getElementById("mainbutton")
    const imageButton = document.getElementById("imagebutton")
    const dividerButton = document.getElementById("dividerbutton")

    if (mainButton.classList.contains("opened")) {
      mainButton.classList.remove("opened")
      imageButton.classList.remove("opened")
      dividerButton.classList.remove("opened")
    } else {
      mainButton.classList.add("opened")
      imageButton.classList.add("opened")
      dividerButton.classList.add("opened")
    }
  }

  document.addEventListener("selectionchange", () => {
    const buttons = document.getElementById("inline-tooltip")
    const { target } = getIdOfCaretPlaced()

    if (target.textContent === "") {
      const rect = target.getBoundingClientRect()
      buttons.style.top = rect.top + rect.height / 2 - 16 + "px"
      buttons.style.left = rect.left - 40 + "px"
      buttons.style.visibility = "visible"
    } else {
      buttons.style.visibility = "hidden"
    }
  })

  return (
    <ButtonWrapper id="inline-tooltip">
      <MainButton id="mainbutton" onClick={clickMainButton}>
        <ButtonSvg>
          <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"></path>
        </ButtonSvg>
      </MainButton>
      <FunctionButton id="imagebutton" onClick={addImage}>
        <ButtonSvg>
          <g>
            <path d="M4.042 17.05V8.857c0-1.088.842-1.85 1.935-1.85H8.43C8.867 6.262 9.243 5 9.6 5.01L15.405 5c.303 0 .755 1.322 1.177 2 0 .077 2.493 0 2.493 0 1.094 0 1.967.763 1.967 1.85v8.194c-.002 1.09-.873 1.943-1.967 1.943H5.977c-1.093.007-1.935-.85-1.935-1.937zm2.173-9.046c-.626 0-1.173.547-1.173 1.173v7.686c0 .625.547 1.146 1.173 1.146h12.683c.625 0 1.144-.53 1.144-1.15V9.173c0-.626-.52-1.173-1.144-1.173h-3.025c-.24-.63-.73-1.92-.873-2 0 0-5.052.006-5 0-.212.106-.87 2-.87 2l-2.915.003z"></path>
            <path d="M12.484 15.977a3.474 3.474 0 01-3.488-3.49A3.473 3.473 0 0112.484 9a3.474 3.474 0 013.488 3.488c0 1.94-1.55 3.49-3.488 3.49zm0-6.08c-1.407 0-2.59 1.183-2.59 2.59 0 1.408 1.183 2.593 2.59 2.593 1.407 0 2.59-1.185 2.59-2.592 0-1.406-1.183-2.592-2.59-2.592z"></path>
          </g>
        </ButtonSvg>
      </FunctionButton>
      <FunctionButton id="dividerbutton" onClick={addDivider}>
        <ButtonSvg>
          <g>
            <path d="M8.45 12H5.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.247 0 .45-.226.45-.5 0-.276-.203-.5-.45-.5H8.45z"></path>
            <path d="M17.45 12H14.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.248 0 .45-.226.45-.5 0-.276-.202-.5-.45-.5h-2.25z"></path>
          </g>
        </ButtonSvg>
      </FunctionButton>
    </ButtonWrapper>
  )
}

export default AddContentButton
