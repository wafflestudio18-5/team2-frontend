import styled from "styled-components"

const SearchbarStyle = styled.input`
  margin-bottom: 40px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 49px;
  font-family: "Noto Sans";
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`

const Searchbar = ({ searchWord, onChangeInput, enter }) => {
  let placeholder = "Search Wadium"
  let value = ""
  if (searchWord !== "" && searchWord !== undefined) {
    placeholder = searchWord
    value = searchWord
  }
  return (
    <SearchbarStyle
      placeholder={placeholder}
      defaultValue={value}
      type="text"
      onChange={onChangeInput}
      onKeyDown={enter}
    />
  )
}

export default Searchbar
