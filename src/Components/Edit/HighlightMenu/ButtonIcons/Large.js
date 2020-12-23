import SvgStyle from "./SvgStyle"

const Large = ({ activated }) => {
  return (
    <SvgStyle activated={activated}>
      <path d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z"></path>
    </SvgStyle>
  )
}

export default Large
