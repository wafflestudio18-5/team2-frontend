import styled from "styled-components"
import GlobalStyle from "../../../Assets/Fonts/fonts"

const CenterBigWritingStyle = styled.h2`
  font-size: 68px;
  font-family: "GTSuper";
  margin: 0;
  line-height: 74px;
  margin-bottom: 53px;
`

const CenterBigWriting = ({ children }) => {
  return (
    <span>
      <GlobalStyle />
      <CenterBigWritingStyle>{children}</CenterBigWritingStyle>
    </span>
  )
}

export default CenterBigWriting
