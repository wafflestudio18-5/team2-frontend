import styled from "styled-components"
import Color from "../../../Constants/Color"

const TrendingBlockStyle = styled.div`
  width: 33.33333333%;
  flex-basis: 33.33333333%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 24px;
  padding: 0 16px;
`

const TrendingBlockNumber = styled.p`
  margin: 0px;
  margin-right: 16px;
  width: 40px;
  color: ${Color.lightGray};
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  top: -10px;
  position: relative;
`

const TrendingBlockWriter = styled.p`
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 16px;
  color: ${Color.borderBlack};
  font-weight: 500;
`

const TrendingBlockProfile = styled.img`
  border-radius: 4px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 8px;
  margin-top: 3px;
  object-fit: cover;
`

const TrendingBlockTitle = styled.p`
  width: 100%;
  max-height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;
  color: ${Color.borderBlack};
`

const TrendingBlockDateAndTime = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${Color.gray};
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.03em;
`

const TrendingBlock = ({ index, title, writer, date, time, profileurl }) => {
  return (
    <TrendingBlockStyle>
      <TrendingBlockNumber>0{index + 1}</TrendingBlockNumber>
      <div>
        <TrendingBlockWriter>
          <TrendingBlockProfile src={profileurl} />
          {writer}
        </TrendingBlockWriter>
        <TrendingBlockTitle>{title}</TrendingBlockTitle>
        <TrendingBlockDateAndTime>
          {date}
          &nbsp;&middot;&nbsp;
          {time}
          &nbsp;read
        </TrendingBlockDateAndTime>
      </div>
    </TrendingBlockStyle>
  )
}

export default TrendingBlock
