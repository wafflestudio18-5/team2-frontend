const onChangeInput = (event, setInputValue) => {
  // 검색창 값 바뀌면 state update
  setInputValue(event.target.value)
}

export default onChangeInput
