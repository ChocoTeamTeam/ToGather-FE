import HeaderNavigation from 'src/components/Header/HeaderNavigation';
import StudyListContainer from 'src/components/Study/StudyContainer';
import Statistics from '../components/Statistics/Statistics';
import useInterSectionObserver from '../hooks/useInterSectionObserver';
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import UploadTest from '../apis/UploadImageInput';
import UserLoginAuth from 'src/components/oauth/UserLoginAuth';

const MainPage = () => {
  return (
    <>
      <UserLoginAuth />
      <HeaderNavigation />
      <Statistics />
      <StudyListContainer />
    </>
  );
};

export default MainPage;
