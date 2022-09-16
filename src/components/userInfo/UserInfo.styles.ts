import styled from '@emotion/styled';
import COLOR from 'src/constants/colors';
import { buttonStyle } from 'src/styles/Button';

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

const SubmmitButton = styled.button`
  ${buttonStyle}
  margin-right: 1rem;
  background: ${COLOR.BLUR_700};
`;

const CancelButton = styled.button`
  ${buttonStyle}
  background: ${COLOR.GRAY_400};
`;

export { UserInfoBlock, ButtonBlock, Wrapper, TempBlock, SubmmitButton, CancelButton };
