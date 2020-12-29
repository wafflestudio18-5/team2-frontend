import styled from "styled-components"

const OkButtonStyle = styled.button`
  margin-top: 62px;
  margin-bottom: 15px;
  border-radius: 4px;
  border-color: rgba(25, 25, 25, 1);
  border-width: 1px;
  background: rgba(25, 25, 25, 1);
  padding: 7px 16px 9px;
  font-size: 14px;
  display: inline-block;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  cursor: pointer;
`

const OkButton = ({ hideModal }) => {
  return <OkButtonStyle onClick={hideModal}>OK</OkButtonStyle>
}

export default OkButton
