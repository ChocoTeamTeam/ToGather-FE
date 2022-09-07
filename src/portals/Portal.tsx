import React from 'react';
import ReactDom from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('modal') as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default Portal;
