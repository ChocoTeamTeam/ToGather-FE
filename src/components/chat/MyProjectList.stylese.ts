import styled from '@emotion/styled';
import COLOR from 'src/constants/colors';

const MyProjectListBlock = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const MyProjectInner = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const ChatRoomBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
  width: 100%;
`;

const ChatRoomButton = styled.button`
  width: 100%;
  height: 12%;
  background: white;
  border: 3px solid ${COLOR.GRAY_100};
  border-radius: 1.5rem;
  font-size: 20px;
  & + & {
    margin-top: 2rem;
  }
  &:hover {
    outline: none;
    border-color: ${COLOR.BLUR_700};
    box-shadow: 0 0 5px ${COLOR.BLUR_700};
  }
`;

export { MyProjectListBlock, Wrapper, MyProjectInner, ChatRoomBlock, ChatRoomButton };
