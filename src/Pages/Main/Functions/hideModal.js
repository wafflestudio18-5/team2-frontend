const hideModal = (setModalVisible, setModalShow) => {
  // Modal 다시 숨김. hideModal이 호출되면 modalVisible이 false로 바뀌고,
  // 이 때 100ms짜리 fadeOut 애니메이션이 실행, 100ms 이후 modalShow가 false가 되면서 실제로 modal이 사라짐.
  setModalVisible(false)
  setTimeout(() => setModalShow(false), 100)
}

export default hideModal
