import React from 'react';
import { BreadCrumbBlock } from './Breadcrumb.styles';

const Breadcrumb = ({ children }: { children: React.ReactNode }) => {
  return <BreadCrumbBlock>{children}</BreadCrumbBlock>;
};

export default Breadcrumb;
