import { divide } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import {
  MessageContainerBlock,
  MessageRoomName,
  MessagContainereWrapper,
  MessageBoxBlock,
  MessageBoxWrapper,
  BubbleMessage,
  ChatMessageWrapper,
  ChatMessageInput,
  ChatSendButton,
  MessageTime,
  MessageBox,
  UserProfile,
  UserNickname,
} from './ChatContainer.styles';

interface IMessage {
  message: string;
  nickname: string;
  profileImage: string;
  time: string;
}

interface IProps {
  message: IMessage[];
  // roomId: string;
  // rommName: string;
  content: string;
  sendMessage: (message: string) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyPress: (e: KeyboardEvent) => void;
}

const ChatContainer = ({ message, sendMessage, inputChange, content, keyPress }: IProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollTo({
        top: bottomRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [message.length]);

  return (
    <MessageContainerBlock>
      <MessagContainereWrapper>
        <MessageRoomName>방 이름</MessageRoomName>
        <MessageBoxBlock>
          <MessageBoxWrapper ref={bottomRef}>
            {message.map(({ nickname, profileImage, message, time }, idx) => (
              <MessageBox key={idx}>
                <UserProfile>
                  <img src={profileImage} alt="프로필" />
                </UserProfile>
                <div>
                  <UserNickname>{nickname}</UserNickname>
                  <BubbleMessage>{message}</BubbleMessage>
                </div>
                <MessageTime>{time}</MessageTime>
              </MessageBox>
            ))}
          </MessageBoxWrapper>
          <ChatMessageWrapper>
            <ChatMessageInput
              type="text"
              value={content}
              onChange={inputChange}
              onKeyPress={keyPress}
              placeholder="메시지를 입력해주세요."
            />
            <ChatSendButton onClick={sendMessage}>전송</ChatSendButton>
          </ChatMessageWrapper>
        </MessageBoxBlock>
      </MessagContainereWrapper>
    </MessageContainerBlock>
  );
};

export default ChatContainer;
