import styled from "styled-components"
import Color from "../../../Constants/Color"
import waffle from "../../../Images/waffle.png"

const CenterImageWrapper = styled.div`
  width: calc(33.3333% - 16px);
  border-left: 1px solid ${Color.lightGray};
  box-sizing: border-box;
  margin-left: 20px;
  height: calc(100% - 20px);
  overflow: hidden;
  position: relative;

  @media (max-width: 1080px) {
    display: none;
  }
`

const CenterImageStyle = styled.img`
  position: absolute;
  top: 50%;
  right: -20%;
  width: 400px;
  height: auto;
  transform: rotate(30deg);
`

const CenterImage = () => {
  return (
    <CenterImageWrapper>
      <CenterImageStyle src={waffle} />
    </CenterImageWrapper>
  )
}

export default CenterImage
