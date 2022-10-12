import styled from '@emotion/styled';
import COLOR from 'src/constants/colors';
import Flex from '../../styles/Flex';

const DetailBlock = styled.section`
  position: relative;
  top: 5rem;
  width: 60%;
  left: 15%;
  ${Flex({ justifyContent: 'center', flexDirection: 'column' })};
  padding: 5rem 2rem;
`;

export { DetailBlock };
