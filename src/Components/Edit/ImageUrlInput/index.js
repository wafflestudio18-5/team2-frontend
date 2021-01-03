import styled from "styled-components"

const InputWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputContent = styled.div`
  width: 800px;
  height: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
`

const Message = styled.h1``

const InputField = styled.input``

const OKButton = styled.button``

const ImageUrlInput = ({ onChangeUrl, createImage, hideInput }) => {
  return (
    <InputWrapper>
      <InputContent>
        <Message>Image URL</Message>
        <InputField onChange={onChangeUrl} />
        <OKButton onClick={createImage}>OK</OKButton>
        <OKButton onClick={hideInput}>Cancel</OKButton>
      </InputContent>
    </InputWrapper>
  )
}

export default ImageUrlInput
