import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import MainPage from './pages/MainPage';
import ModalProvider from './contexts/ModalContext';
import AuthRedirectPage from './pages/AuthRedirectPage';
import ChatPage from './pages/ChatPage';
import MyPage from './pages/MyPage';
import NotFoundPage from './pages/NotFoundPage';
import HeaderNavigation from './components/Header/HeaderNavigation';
import UploadStudy from './pages/UploadStudy';
import MyProject from './components/myProject/MyProject';
import StudyDetail from './pages/StudyDetail';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ModalProvider>
          <HeaderNavigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/myProject" element={<MyProject />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/oauth/:social" element={<AuthRedirectPage />} />
            <Route path="/uploadStudy" element={<UploadStudy />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/studyDetail/:id" element={<StudyDetail />} />
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
