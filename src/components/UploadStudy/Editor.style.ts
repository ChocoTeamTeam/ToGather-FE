import styled from '@emotion/styled';
import COLOR from 'src/constants/colors';
import FontSizes from 'src/constants/FontSizes';
import Flex from '../../styles/Flex';

const WrapEditor = styled.div`
  ${Flex({
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '2rem',
    alignItems: 'center',
  })}
  .quill {
    max-width: 50rem;
  }
  .ql-editor {
    min-height: 20rem;
  }
`;
const ContentHeading = styled.h3`
  width: 100%;
  font-size: ${FontSizes.Study_Upload_Fontsize};
  font-weight: ${FontSizes.Study_Upload_FontWeight};
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 8%);
  margin-top: 13rem;
`;

const Input = styled.input`
  min-width: 50rem;
  height: 38px;
  outline: none;
`;

export { WrapEditor, ContentHeading, Input };
