declare module '@emotion/core';
declare module '@emotion/styled';
declare module 'uuid';
declare module 'multer';
declare module 'multer-s3';
declare module 'vite-plugin-svgr';
declare module 'react-stomp';
declare module 'react-toastify';

declare interface IconProps {
  borderColor?: string;
  color?: string;
  width?: string;
  height?: string;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
