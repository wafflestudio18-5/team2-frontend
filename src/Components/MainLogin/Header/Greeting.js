import styled from "styled-components"
import Color from "../../../Constants/Color"

const GreetingStyle = styled.div`
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid rgba(230, 230, 230, 1);
  font-weight: 600;
  color: ${Color.borderBlack};
  line-height: 28px;
  font-size: 20px;
  font-family: "Noto Sans";
  letter-spacing: -0.03em;
  white-space: nowrap;
`

const Greeting = () => {
  const hour = new Date().getHours()

  let message = ""
  switch (true) {
    case 5 <= hour && hour < 12:
      message = "Good morning"
      break

    case 12 <= hour && hour < 17:
      message = "Good afternoon"
      break

    case 17 <= hour && hour < 24:
      message = "Good evening"
      break

    default:
      message = "Good night"
      break
  }

  return <GreetingStyle>{message}</GreetingStyle>
}

export default Greeting
