import styled from "styled-components"
import Color from "../../../Constants/Color"

const CenterWrapper = styled.div`
  width: 100%;
  background-color: ${Color.yellow};
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 904px) {
    padding: 0 64px;
    height: 400px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
    height: 400px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
    height: 368px;
  }

  background-origin: border-box;
  background-image: url("https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png");
  background-size: 385px 341px;
  background-repeat: no-repeat;
  background-position: bottom 59px right 32px;

  @media (max-width: 1079.98px) {
    background-position: bottom 59px right 80px;
  }

  @media (max-width: 903.98px) {
    background-position: bottom 59px right 48px;
  }

  @media (max-width: 727.98px) {
    background-position: bottom 28px right -64px;
  }

  @media (max-width: 551.98px) {
    background-position: bottom 28px right -126px;
  }
`

export default CenterWrapper
