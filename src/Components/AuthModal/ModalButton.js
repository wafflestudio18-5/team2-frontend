import styled from "styled-components"
import Colors from "../../Constants/Color"

const ModalButton = styled.button`
  width: 212px;
  height: 41px;
  box-sizing: border-box;
  margin-bottom: 12px;
  background-color: white;
  border: 1px solid ${Colors.borderGray};
  border-radius: 4px;
  color: ${Colors.borderBlack};
  line-height: 20px;
  text-align: left;
  padding-left: 16px;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

export default ModalButton
