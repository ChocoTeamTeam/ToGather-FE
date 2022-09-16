import styled from '@emotion/styled';
import COLOR from 'src/constants/colors';

const UserInfoBlock = styled.div`
  position: relative;
  top: 5rem;
  padding: 0 4rem;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const TempBlock = styled.div`
  width: 60%;
`;

export { UserInfoBlock, ButtonBlock, Wrapper, TempBlock };
