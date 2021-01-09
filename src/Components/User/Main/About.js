import styled, { css } from "styled-components"
import WriterInfo from "./WriterInfo"

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: opacity 200ms;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
  top: 85.6px;
  position: fixed;
  width: 22.5%;

  @media (min-width: 1200px) {
    ${(props) =>
      props.reachScrollCheckPoint &&
      css`
        opacity: 1;
        pointer-events: all;
      `}
  }
`

const AboutBlock = styled.div`
  display: block;
  margin-left: 30%;
  min-width: 0;
  max-width: 1192px;
  width: 100%;
`

const AboutInnerBlock = styled.div`
  display: flex;
  width: 131px;
  flex-direction: column;
`

const About = ({ reachScrollCheckPoint, userinfo }) => {
  return (
    <AboutWrapper reachScrollCheckPoint={reachScrollCheckPoint}>
      <AboutBlock>
        <AboutInnerBlock>
          <WriterInfo userinfo={userinfo} />
        </AboutInnerBlock>
      </AboutBlock>
    </AboutWrapper>
  )
}

export default About
