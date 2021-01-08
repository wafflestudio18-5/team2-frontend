import styled, { keyframes } from "styled-components"
import waffle from "../../Images/waffle.png"

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg) ; }
`

const SpinningWaffle = styled.img`
  position: absolute;
  top: calc(40% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  animation: ${shake} 4s;
  animation-iteration-count: infinite;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const Loading = () => {
  return (
    <Wrapper>
      <SpinningWaffle src={waffle} />
    </Wrapper>
  )
}

export default Loading
