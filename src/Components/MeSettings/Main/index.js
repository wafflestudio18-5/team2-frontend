import styled from "styled-components"
import Color from "../../../Constants/Color"

const Wrapper = styled.div`
  font-family: "Noto Sans";
  margin-top: 129px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 64px;
  padding-left: 64px;
  padding-bottom: 64px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 1032px;
  color: ${Color.borderBlack};
`

const Block = styled.div`
  margin-bottom: 40px;
`

const InputTag = styled.h4`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`

const Input = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  max-width: 500px;
  border-bottom: 1px solid ${Color.lightGray};
  font-size: 18px;
  margin: 0;
`

const Message = styled.p`
  color: ${Color.gray};
  font-size: 14px;
  margin: 0;
  margin-top: 4px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  cursor: pointer;
  background: none;
  width: 60px;
  height: 40px;
  border: 1px solid ${Color.lightGray};
  color: ${Color.gray};
  border-radius: 4px;
  margin-right: 20px;

  &:hover {
    border-color: ${Color.gray};
    color: ${Color.borderBlack};
  }
`

const ErrorMessage = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${(props) => (props.errorStatus && Color.green) || Color.red};
`

const Main = ({ userSpec, onChangeInput, save, errorMessage }) => {
  const errorStatus = errorMessage === "Saved"
  return (
    <Wrapper>
      <Block>
        <InputTag>Name</InputTag>
        <Input
          defaultValue={userSpec.name}
          name="name"
          onChange={onChangeInput}
        />
        <Message>
          Your name appears on your Profile page, as your byline, and in your
          responses.
          <br></br>
          It is a required field.
        </Message>
      </Block>
      <Block>
        <InputTag>Bio</InputTag>
        <Input
          defaultValue={userSpec.bio}
          name="bio"
          onChange={onChangeInput}
        />
        <Message>
          Your bio appears on your Profile page. Max 160 characters.
        </Message>
      </Block>
      <Block>
        <InputTag>Photo</InputTag>
        <Input
          defaultValue={userSpec.profile_image}
          name="profile_image"
          onChange={onChangeInput}
        />
        <Message>
          Your photo appears on your Profile page and with your stories across
          Wadium.
          <br></br>
          Recommended size: Square, at least 1000 pixels per side. File type:
          JPG, PNG or GIF.
        </Message>
      </Block>
      <ButtonWrapper>
        <Button onClick={save}>Save</Button>
        <ErrorMessage errorStatus={errorStatus}>{errorMessage}</ErrorMessage>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Main
