import React from 'react';
import { CancelButton, CustomButton } from 'src/styles/Button';
import StudyComponent from '../Study/StudyComponent';
import {
  Study,
  StudyAuthor,
  StudyDeadline,
  StudyFooter,
  StudyTitle,
  StudyViewer,
} from '../Study/StudyList.style';
import StudyTechs from '../Study/StudyTechs';
import {
  ChatHandleBlock,
  ChatRoomBlock,
  ChatRoomButton,
  ChatRoomWrapper,
  MyProjectInner,
  MyProjectListBlock,
  Title,
  Wrapper,
} from './MyProjectList.stylese';

interface Props {
  [key: string]: any;
}
const MyProjectList = ({ myProject }: Props) => {
  return (
    <MyProjectListBlock>
      <Wrapper>
        {myProject.map((list: any, idx: number) => (
          <MyProjectInner key={idx}>
            <div>
              <Title to="/">프로젝트 제목</Title>
              <CustomButton>방생성</CustomButton>
            </div>
            <ChatRoomBlock>
              <ChatRoomWrapper>
                <ChatRoomButton to="/chat">채팅방 입장</ChatRoomButton>
                <ChatHandleBlock>
                  <CustomButton>수정</CustomButton>
                  <CancelButton>삭제</CancelButton>
                </ChatHandleBlock>
              </ChatRoomWrapper>
              <ChatRoomWrapper>
                <ChatRoomButton to="/chat">채팅방 1 입장</ChatRoomButton>
                <ChatHandleBlock>
                  <CustomButton>수정</CustomButton>
                  <CancelButton>삭제</CancelButton>
                </ChatHandleBlock>
              </ChatRoomWrapper>
              <ChatRoomWrapper>
                <ChatRoomButton to="/chat">채팅방 1 입장</ChatRoomButton>
                <ChatHandleBlock>
                  <CustomButton>수정</CustomButton>
                  <CancelButton>삭제</CancelButton>
                </ChatHandleBlock>
              </ChatRoomWrapper>
            </ChatRoomBlock>
          </MyProjectInner>
        ))}
      </Wrapper>
    </MyProjectListBlock>
  );
};

export default MyProjectList;
