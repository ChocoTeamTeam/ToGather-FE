import HeaderNavigation from 'src/components/Header/HeaderNavigation';

import StudyListContainer from 'src/components/Study/StudyContainer';
import Statistics from '../components/Statistics/Statistics';
import useInterSectionObserver from '../hooks/useInterSectionObserver';
import React, { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import UploadTest from '../apis/UploadImageInput';

const MainPage = () => {
  return (
    <>
      <HeaderNavigation />
      <Statistics />
      <StudyListContainer />
    </>
  );
};

export default MainPage;
