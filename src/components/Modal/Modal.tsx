import React from 'react';
import Portal from '../../portals/Portal';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <Portal>{children}</Portal>;
};

export default Modal;
