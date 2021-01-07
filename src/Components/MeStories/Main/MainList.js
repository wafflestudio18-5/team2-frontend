import styled from "styled-components"

const MainList = ({ stories, type }) => {
  return (
    <div>
      {stories.map((story, index) => {
        return (
          <div key={index}>
            <p>{story.title}</p>
            <p>{story.subtitle}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MainList
