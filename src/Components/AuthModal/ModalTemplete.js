import styled from "styled-components"

const ModalTempleteStyle = styled.div`
  position: relative;
  color: black;
  font-size: 70px;
  width: 678px;
  height: 695px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  border-radius: 4px;
  box-sizing: border-box;
`

const ModalTemplete = ({ children }) => {
  return <ModalTempleteStyle>{children}</ModalTempleteStyle>
}

export default ModalTemplete
