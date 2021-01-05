import styled from "styled-components"
import Color from "../../../Constants/Color"

const StorySummaryStyle = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-family: "Noto Sans";
`

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 30%;
  position: relative;
`

const FeaturedImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  vertical-align: middle;
  background-image: ${(props) => "url(" + props.src + ")"};
  background-size: cover;
  background-position: center center;
`

const Title = styled.h3`
  margin: 0%;
  margin-top: 31px;
  font-size: 30px;
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 700;
  padding-top: 5px;
  color: ${Color.black};
`

const Subtitle = styled.h4`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 7px;
  font-size: 22px;
  line-height: 1.22;
  letter-spacing: -0.012em;
  color: ${Color.gray};
  font-weight: 400;
`

const StorySummary = ({ story }) => {
  let { id, title, subtitle, featured_image } = story
  if (featured_image === "" || featured_image === undefined) {
    return (
      <StorySummaryStyle href={"/story/" + id}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </StorySummaryStyle>
    )
  }
  return (
    <StorySummaryStyle href={"/story/" + id}>
      <ImageContainer>
        <FeaturedImage src={featured_image} />
      </ImageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StorySummaryStyle>
  )
}

export default StorySummary
