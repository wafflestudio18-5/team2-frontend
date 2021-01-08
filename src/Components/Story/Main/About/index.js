import styled, { css } from "styled-components"
import Color from "../../../../Constants/Color"
import WriterInfo from "./WriterInfo"

const AboutWrapper = styled.div`
  display: none;
  justify-content: center;
  transition: opacity 200ms;
  opacity: 1;
  will-change: opacity;
  top: 85.6px;
  position: fixed;
  width: 22.5%;

  @media (min-width: 1200px) {
    ${(props) =>
      props.reachScrollCheckPoint &&
      css`
        display: flex;
      `}
  }
`

const AboutBlock = styled.div`
  display: block;
  margin-left: 50%;
  min-width: 0;
  max-width: 1192px;
  width: 100%;
`

const AboutInnerBlock = styled.div`
  display: flex;
  width: 131px;
  flex-direction: column;
`

const ResponseBlock = styled.div`
  display: block;
  margin-bottom: 19px;
  padding-top: 28px;
`

const Response = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  background: 0;
`

const ResponseWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ResponseNumber = styled.h4`
  display: inline-block;
  padding-left: 6px;
  margin: 0;
  color: ${Color.gray};
  line-height: 20px;
  font-size: 14px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin-top: 5px;
`

const About = ({
  reachScrollCheckPoint,
  userinfo,
  storyinfo,
  setOpen,
  ResponseNum,
}) => {
  return (
    <AboutWrapper reachScrollCheckPoint={reachScrollCheckPoint}>
      <AboutBlock>
        <AboutInnerBlock>
          <WriterInfo userinfo={userinfo} />
          <ResponseBlock>
            <Response onClick={() => setOpen(true)}>
              <ResponseWrapper>
                <svg width="25" height="25" class="r" aria-label="responses">
                  <path
                    d="M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <ResponseNumber>{ResponseNum}</ResponseNumber>
              </ResponseWrapper>
            </Response>
          </ResponseBlock>
        </AboutInnerBlock>
      </AboutBlock>
    </AboutWrapper>
  )
}

export default About
