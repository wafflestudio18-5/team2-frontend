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

const Searchbar = () => {
  let placeholder = "Search Wadium"
  return <SearchbarStyle placeholder={placeholder} />
}

export default Searchbar
