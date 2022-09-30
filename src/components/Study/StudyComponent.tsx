import React from 'react';
import {
  Study,
  StudyAuthor,
  StudyDeadline,
  StudyFooter,
  StudyTitle,
  StudyViewer,
} from './StudyList.style';
import StudyTechs from './StudyTechs';

interface Iprops {
  id: any;
  techs: any;
  deadline: any;
  title: any;
  author: any;
}

const StudyComponent = ({ id, techs, deadline, title, author }: Iprops) => {
  return (
    <Study to="/">
      <StudyTechs techsList={techs} />
      <StudyDeadline>
        마감 예정일
        <span aria-hidden="true">|</span>
        {deadline}
      </StudyDeadline>
      <StudyTitle>{title}</StudyTitle>
      <StudyFooter>
        <StudyAuthor>
          <img src="/" width="36px" height="36px" />
          {author}
        </StudyAuthor>
        <StudyViewer>viewerArea</StudyViewer>
      </StudyFooter>
    </Study>
  );
};

export default StudyComponent;
