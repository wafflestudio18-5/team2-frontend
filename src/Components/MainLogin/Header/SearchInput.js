import styled from "styled-components"
import Color from "../../../Constants/Color"

const SearchInput = styled.input`
  width: 182px;
  outline: none;
  border: none;
  color: ${Color.borderBlack};
  margin: 0;
  margin-right: 28px;
  transition: width 140ms ease-in, padding 140ms ease-in;
  font-size: 15px;
`

export default SearchInput
