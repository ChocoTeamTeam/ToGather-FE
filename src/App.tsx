import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import LoginModal from './components/Login/LoginModal';
import Modal from './portals/Portal';

const App = () => {
  return (
    <>
      <LoginModal />
    </>
  );
};

export default App;
