const hideModal = (setModalVisible, setModalShow) => {
  setModalVisible(false)
  setTimeout(() => setModalShow(false), 100)
}

export default hideModal
