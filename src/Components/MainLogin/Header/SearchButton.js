import styled from "styled-components"

const ButtonStyle = styled.button`
  margin: 0;
  padding: 0;
  background: 0;
  border: 0;
  cursor: pointer;
`

const SvgStyle = styled.svg`
  fill: rgba(117, 117, 117, 1);
  vertical-align: middle;
  width: 25px;
  height: 25px;
  margin: 4px;
`

const SearchButton = () => {
  return (
    <ButtonStyle>
      <SvgStyle viewBox="0 0 25 25">
        <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
      </SvgStyle>
    </ButtonStyle>
  )
}

export default SearchButton
