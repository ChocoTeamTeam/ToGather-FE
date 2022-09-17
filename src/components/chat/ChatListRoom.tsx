import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredStudy } from 'src/contexts/SeacrchTechsAtom';
import Breadcrumb from '../breadCrumb/Breadcrumb';
import { ChatListRoomBlock } from './ChatListRoom.styles';
import MyProjectList from './MyProjectList';

const ChatListRoom = () => {
  const myProject = useRecoilValue(filteredStudy);
  const myProjectMock = myProject.filter((_, idx) => idx < 2);
  console.log(myProjectMock);
  return (
    <ChatListRoomBlock>
      <Breadcrumb>마이 페이지 - 채팅방</Breadcrumb>
      <MyProjectList myProject={myProjectMock} />
    </ChatListRoomBlock>
  );
};

export default ChatListRoom;
