const onChangeSearchbox = (event, setSearchValue) => {
  // 검색창의 입력된 값이 바뀔때 마다 호출되어 state 수정
  setSearchValue(event.target.value)
}

export default onChangeSearchbox
