import { StudySection, Main } from './StudyContainer.style';
import { useRecoilValue } from 'recoil';
import StudyList from './StudyList';
import getStudy from '../../apis/studyTest';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';




const StudyListContainer = () => {

  
  return (
    <Main>
      <StudySection>
        <StudyList />
      </StudySection>
    </Main>
  );
}

export default StudyListContainer;

