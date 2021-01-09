import styled from "styled-components"
import Color from "../../Constants/Color"

const ResponseHeaderWrapper = styled.div`
  padding: 24px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
`

const ResponseHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${Color.borderblack};
  line-height: 24px;
  letter-spacing: 0;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
`

const ResponseButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`

const CloseButton = styled.button`
  fill: ${Color.gray};
  position: relative;
  right: -7px;
  margin: 0;
  padding: 0;
  background: 0;
  cursor: pointer;
  border: 0;
  height: 25px;
`

const ResponseHeader = ({ ResponseNum, setOpen }) => {
  var ResponseText = ""
  if (ResponseNum === 0) {
    ResponseText = "Responses"
  } else {
    ResponseText = "Responses (" + ResponseNum + ")"
  }
  return (
    <ResponseHeaderWrapper>
      <ResponseHeaderTitle>{ResponseText}</ResponseHeaderTitle>
      <ResponseButtonBlock>
        <CloseButton onClick={() => setOpen(false)}>
          <svg width="25" height="25" viewBox="0 0 25 25" class="dw">
            <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path>
          </svg>
        </CloseButton>
      </ResponseButtonBlock>
    </ResponseHeaderWrapper>
  )
}

export default ResponseHeader
