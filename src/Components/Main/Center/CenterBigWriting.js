import styled from "styled-components"
import GlobalStyle from "../../../Assets/Fonts/fonts"

const CenterBigWritingStyle = styled.h2`
  font-size: 70px;
  font-family: "GTSuper";
`

const CenterBigWriting = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <CenterBigWritingStyle>{children}</CenterBigWritingStyle>
    </div>
  )
}

export default CenterBigWriting
