import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Noto Sans";
  margin-top: 100px;
`

const Block = styled.div``

const InputTag = styled.h4``

const Input = styled.input``

const Message = styled.p``

const Button = styled.button``

const Main = ({ userSpec, onChangeInput, save }) => {
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
          responses. It is a required field.
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
          Medium.
          <br></br>
          <br></br>
          Recommended size: Square, at least 1000 pixels per side. File type:
          JPG, PNG or GIF.
        </Message>
      </Block>
      <Button onClick={save}>Save</Button>
      <p>
        {userSpec.name}
        {userSpec.bio}
        {userSpec.profile_image}
      </p>
    </Wrapper>
  )
}

export default Main
