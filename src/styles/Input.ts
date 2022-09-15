import styled from '@emotion/styled';

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

const ProfileImageBlock = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

const ProfileArticle = styled.article`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: gray;
`;

const InputLabel = styled.label`
  display: block;
  width: 80px;
`;

const InputText = styled.input`
  width: 60%;
  height: 100%;
  border-radius: 5px;
  border: ${({ type }: { type: string }) => (type === 'file' ? 'none' : '1px solid gray')};
  padding: 0 1rem;
`;

const SubmitButton = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid lightgreen;
  background: none;

  &:hover {
    background: lightgreen;
  }
`;

export { InputBoxBlock, InputLabel, InputText, ProfileImageBlock, ProfileArticle, SubmitButton };
