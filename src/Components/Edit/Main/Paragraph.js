import styled from "styled-components"
import Color from "../../../Constants/Color"

const Kicker = styled.h4`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
`

const Title = styled.h3`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
`

const Subtitle = styled.h4`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
`

const Largest = styled.h3`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 45px;
  font-family: "NotoSans";
  font-size: 30px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.015em;
`

const Large = styled.h4`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 31px;
  font-family: "NotoSans";
  font-size: 22px;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: -0.012em;
`

const Normal = styled.p`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 54px;
  font-family: "Lora";
  font-size: 20px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  margin-bottom: 0;
  color: ${Color.black};
`

const Emphasize1 = styled.blockquote`
  max-width: 740px;
  width: 100%;
  padding: 0 17px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 10px;
  font-family: "Lora";
  font-style: italic;
  font-size: 19px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  color: ${Color.black};
  border-left: 3px solid ${Color.black};
`

const Emphasize2 = styled.blockquote`
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 55px;
  font-style: italic;
  font-size: 26px;
  line-height: 1.48;
  letter-spacing: -0.012em;
  color: rgba(0, 0, 0, 0.68);
  padding-left: 70px;
`

const Paragraph = ({ emphasizing, children }) => {
  switch (emphasizing) {
    case "kicker":
      return <Kicker>{children}</Kicker>

    case "title":
      return <Title>{children}</Title>

    case "subtitle":
      return <Subtitle>{children}</Subtitle>

    case "largest":
      return <Largest>{children}</Largest>

    case "large":
      return <Large>{children}</Large>

    case "normal":
      return <Normal>{children}</Normal>

    case "emphasize1":
      return <Emphasize1>{children}</Emphasize1>

    case "emphasize2":
      return <Emphasize2>{children}</Emphasize2>

    default:
      break
  }
}

export default Paragraph
