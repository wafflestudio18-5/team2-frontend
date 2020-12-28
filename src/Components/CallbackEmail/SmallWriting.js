import styled from "styled-components"

const SmallWriting = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => {
    switch (props.alertWrongEmail) {
      case true:
        return "rgb(201, 74, 74)"
      case false:
        return "rgba(0, 0, 0, 0.54)"
      default:
        break
    }
  }};
`

export default SmallWriting
