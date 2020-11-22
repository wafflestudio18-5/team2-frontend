import styled from "styled-components"
import Color from "../../Constants/Color"

const HeaderWrapper = styled.div`
  background: ${Color.yellow};
  width: 100%;
  height: 75px;
  position: fixed;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${Color.black};

  @media (min-width: 904px) {
    padding: 0 64px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
  }
`

const HeaderContents = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1192px;
  box-sizing: border-box;
  padding: 25px 0;
  display: flex;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContents></HeaderContents>
    </HeaderWrapper>
  )
}

export default Header
