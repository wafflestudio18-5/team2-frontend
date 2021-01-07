import styled from "styled-components"
import error_image from "../../Images/error_image.png"

const ErrorPageStyle = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

const ErrorPage = () => {
  return <ErrorPageStyle src={error_image} />
}

export default ErrorPage
