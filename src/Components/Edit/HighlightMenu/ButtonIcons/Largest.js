import SvgStyle from "./SvgStyle"

const Largest = ({ activated }) => {
  return (
    <SvgStyle activated={activated}>
      <path d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z"></path>
    </SvgStyle>
  )
}

export default Largest
