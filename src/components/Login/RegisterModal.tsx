import axios, { HeadersDefaults } from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signUp } from 'src/apis/auth';
import { authAtom, authSelector } from 'src/contexts/AuthAtom';
import { userSelector } from 'src/contexts/UserAtom';
import { stacktech } from 'src/mocks/SelectTechs';
import { SubmitButton } from 'src/styles/Button';
import { InputLabel, InputText } from 'src/styles/Input';
import { ProfileBoxBlock, ProfileContainer, ProfileWrapper } from 'src/styles/Profile';
import { InputBoxBlock, Title, Wrapper, ButtonBlock } from './RegisterModal.styles';
import useInput from 'src/hooks/useInput';
import S3UploadImage from 'src/hooks/useS3UploadImage';
import Api from 'src/apis/Api';

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const RegisterModal = () => {
  const [fileImage, setFileImage] = useState('');
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const setUser = useSetRecoilState(userSelector);
  const { handleFileInput, handleUpload } = S3UploadImage('profile/');
  const { form, changeInput, multiSelectChange, idNameToMultiSelect } = useInput({
    profileImage: '',
    nickname: '',
    techStackDtos: [],
  });

  const handleImageView = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileImage(URL.createObjectURL(e.target.files[0]));
      handleFileInput(e);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const imageUrl = await handleUpload();
      const formTechStack = idNameToMultiSelect(form.techStackDtos);
      signUp(
        {
          ...form,
          profileImage: imageUrl,
          techStackDtos: formTechStack,
        },
        authToken.signUpToken
      )
        .then((res) => {
          const user = {
            id: res.data.id,
            nickname: res.data.nickname,
            profileImage: res.data.profileImage,
            techStackDtos: res.data.techStackDtos,
          };
          setAuthToken({ refreshToken: res.data.refreshToken });
          setUser(user);
          Api.defaults.headers = {
            Authorization: `Bearer ${res.data.accessToken}`,
          } as CommonHeaderProperties;
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error('전송 오류 form 데이터 확인');
    }
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <ProfileBoxBlock>
        <InputLabel htmlFor="profileImage">프로필</InputLabel>
        <ProfileContainer>
          <ProfileWrapper>
            {fileImage && (
              <img className="profile" src={fileImage} alt="프로필" style={{ margin: 'auto' }} />
            )}
          </ProfileWrapper>
          <label htmlFor="profileImage">업로드</label>
          <InputText id="profileImage" name="profileImage" type="file" onChange={handleImageView} />
        </ProfileContainer>
      </ProfileBoxBlock>
      <InputBoxBlock>
        <InputLabel htmlFor="nickname">닉네임</InputLabel>
        <InputText
          id="nickname"
          name="nickname"
          type="text"
          value={form.nickname}
          onChange={changeInput}
        />
      </InputBoxBlock>
      <InputBoxBlock>
        <InputLabel htmlFor="techStackDtos">기술 태그</InputLabel>
        <CreatableSelect
          isClearable
          isMulti
          id="techStackDtos"
          value={form.techStackDtos}
          className="customSelect"
          name="techStackDtos"
          placeholder="기술 태그"
          options={stacktech}
          onChange={multiSelectChange}
        />
      </InputBoxBlock>
      <ButtonBlock>
        <SubmitButton onClick={handleSubmit}>전송</SubmitButton>
      </ButtonBlock>
    </Wrapper>
  );
};

export default RegisterModal;
