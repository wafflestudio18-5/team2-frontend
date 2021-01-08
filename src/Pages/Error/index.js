import styled from "styled-components"
import error_image from "../../Images/error_image.svg"

const ErrorPageStyle = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 400px) {
    height: 667px;
  }
`

const ErrorPage = () => {
  return <ErrorPageStyle src={error_image} />
}

export default ErrorPage
