import React from 'react';
import './Modal.scss'

const Modal = ({children, modal}) => {
  return (
    <div ref={modal} className='modal'>
      {children}
    </div>
  );
};

export default Modal;