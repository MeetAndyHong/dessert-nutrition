import React from 'react';
import classList from './classList';
import ReactDOM from "react-dom";
import './index.css';

interface ModalProps {
  children: any,
  onClose?: any,
}

const node = document.getElementById('modal-popup-holder');

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    ReactDOM.createPortal(
      <div className={classList.modalPopup}>
          <div className={classList.modalLayer}></div>
          <div className={classList.modalContent}>
            <span className={classList.modalClose} onClick={onClose}>&times;</span>
              {children}
          </div>
      </div>,
      node
    )
  )
}

export default Modal;