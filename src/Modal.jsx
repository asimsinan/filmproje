import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
