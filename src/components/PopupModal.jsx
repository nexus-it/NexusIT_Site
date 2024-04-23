import React from 'react';
import Modal from 'react-modal';

const PopupModal = ({ isOpen, onClose, children }) => {

  const modalStyles = {
    content: {
      height: '50%', // Ajusta la altura según tus necesidades
      width: '50%',  // Ajusta el ancho según tus necesidades
      margin: 'auto',
      overflow: 'auto',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ventana Emergente"
      ariaHideApp={false}
      style={modalStyles}

    >
      <button onClick={onClose}>Cerrar</button>
      {children}
    </Modal>
  );
};

export default PopupModal;
