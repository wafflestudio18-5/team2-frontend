import styled from "styled-components"

const Input = styled.input`
  margin: 0;
  margin-bottom: 15px;
  width: 247px;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 5px;
  height: 35px;
  font-size: 16px;

  :focus {
    outline: 0;
    border-bottom-color: ${(props) => {
      switch (props.alertWrongEmail) {
        case true:
          return "rgb(201, 74, 74)"
        default:
          break
      }
    }};
  }
`

export default Input
