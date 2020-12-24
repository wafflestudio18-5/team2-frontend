import styled from "styled-components"

const DivStyle = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  clip: rect(10px 20px 20px 0);
  margin-left: -10px;
  display: block;
`

const SpanStyle = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #262625;
  transform: rotate(45deg) scale(0.5);
`

const Arrow = () => {
  return (
    <DivStyle>
      <SpanStyle />
    </DivStyle>
  )
}

export default Arrow
