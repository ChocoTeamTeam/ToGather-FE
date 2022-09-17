import styled from '@emotion/styled';

const Wrapper = styled.div`
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;

const InputBoxBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 2rem;
  height: 40px;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;

  .customSelect {
    width: 60%;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export { Wrapper, Title, InputBoxBlock, ButtonBlock };
