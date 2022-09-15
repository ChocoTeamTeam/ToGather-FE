import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useRecoilState } from 'recoil';
import { position, stacktech } from 'src/mocks/SelectTechs';
import { registerAtom } from '../../contexts/RegisterAtom';
import { InputBoxBlock, Title, InputLabel, InputText, Wrapper } from './RegisterModal.styles';

const RegisterModal = () => {
  const [formData, setFormData] = useRecoilState(registerAtom);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (targetValue: any, targetName: any) => {
    const { name } = targetName;
    const { value } = targetValue;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectClear = (targetValue: any, targetAction: any) => {
    const { action, name } = targetAction;
    if (action === 'clear') {
      setFormData({ ...formData, [name]: [] });
    } else {
      for (let item of targetValue) {
        let { value } = item;
        setFormData({ ...formData, [name]: [...formData[name], value] });
      }
    }
  };
  
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <form>
        <InputBoxBlock>
          <InputLabel htmlFor="nickname">닉네임</InputLabel>
          <InputText
            id="nickname"
            name="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleChangeInput}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="profile">프로필</InputLabel>
          <InputText
            id="profile"
            name="profile"
            type="text"
            value={formData.profile}
            onChange={handleChangeInput}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="position">포지션</InputLabel>
          <Select
            className="customSelect"
            defaultValue={position[0]}
            id="position"
            name="position"
            placeholder="포지션"
            options={position}
            onChange={handleSelectChange}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="tech">기술 태그</InputLabel>
          <CreatableSelect
            isClearable
            isMulti
            id="tech"
            className="customSelect"
            name="tech"
            placeholder="기술 태그"
            options={stacktech}
            onChange={handleSelectClear}
          />
        </InputBoxBlock>
      </form>
    </Wrapper>
  );
};

export default RegisterModal;
