import styled from "styled-components"

const TrendingBlockStyle = styled.div`
  width: 33.33333333%;
`

const TrendingBlockNumber = styled.span``

const TrendingBlockWriter = styled.p``

const TrendingBlockTitle = styled.p``

const TrendingBlockDateAndTime = styled.p``

const TrendingBlock = ({ index, title, writer, date, time }) => {
  return (
    <TrendingBlockStyle>
      <TrendingBlockNumber>{index}</TrendingBlockNumber>
      <div>
        <TrendingBlockWriter>{writer}</TrendingBlockWriter>
        <TrendingBlockTitle>{title}</TrendingBlockTitle>
        <TrendingBlockDateAndTime>
          {date}
          {time}
        </TrendingBlockDateAndTime>
      </div>
    </TrendingBlockStyle>
  )
}

export default TrendingBlock
