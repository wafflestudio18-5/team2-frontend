import styled from "styled-components"
import Color from "../../../Constants/Color"

const TrendingHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const TrendingHeaderP = styled.p`
  margin: 0;
  margin-left: 10px;
  color: ${Color.borderBlack};
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.02em;
  font-family: Arial, Helvetica, sans-serif;
`

const TrendingHeader = () => {
  return (
    <TrendingHeaderStyle>
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="fb u">
        <path fill="#fff" d="M0 .8h28v28H0z"></path>
        <g opacity="0.8" clip-path="url(#trending_svg__clip0)">
          <path fill="#fff" d="M4 4.8h20v20H4z"></path>
          <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
          <path
            d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
            stroke="#000"
            stroke-linecap="round"
          ></path>
        </g>
        <defs>
          <clipPath id="trending_svg__clip0">
            <path
              fill="#fff"
              transform="translate(4 4.8)"
              d="M0 0h20v20H0z"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <TrendingHeaderP>TRENDING ON MEDIUM</TrendingHeaderP>
    </TrendingHeaderStyle>
  )
}

export default TrendingHeader
