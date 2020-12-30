const showModal = (ModalType, setModalShow, setModalVisible, setModalType) => {
  // ModalType을 입력받아 이에 해당하는 Modal을 화면에 표시
  setModalShow(true)
  setModalVisible(true)
  setModalType(ModalType)
}

export default showModal
