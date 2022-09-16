import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { position, stacktech } from 'src/mocks/SelectTechs';
import {
  ProfileImageBlock,
  InputBoxBlock,
  InputLabel,
  InputText,
  ProfileArticle,
} from 'src/styles/Input';
import Breadcrumb from '../breadCrumb/Breadcrumb';
import {
  UserInfoBlock,
  ButtonBlock,
  Wrapper,
  TempBlock,
  SubmmitButton,
  CancelButton,
} from './UserInfo.styles';

const UserInfo = () => {
  return (
    <UserInfoBlock>
      <Breadcrumb>마이 페이지 - 내정보</Breadcrumb>
      <Wrapper>
        <form>
          <InputBoxBlock>
            <InputLabel htmlFor="profile">프로필</InputLabel>
            <ProfileImageBlock>
              <ProfileArticle>
                <img src="/" alt="" />
              </ProfileArticle>
              <InputText id="profile" name="profile" type="file" />
            </ProfileImageBlock>
          </InputBoxBlock>
          <InputBoxBlock>
            <InputLabel htmlFor="nickname">닉네임</InputLabel>
            <InputText id="nickname" name="nickname" type="text" />
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
            />
          </InputBoxBlock>
          <InputBoxBlock>
            <InputLabel htmlFor="project">프로젝트 이력</InputLabel>
            <InputText id="project" name="project" type="text" readOnly />
          </InputBoxBlock>
          <InputBoxBlock>
            <InputLabel htmlFor="temp">온도</InputLabel>
            <TempBlock>23</TempBlock>
          </InputBoxBlock>
          <ButtonBlock>
            <SubmmitButton>수정</SubmmitButton>
            <CancelButton>취소</CancelButton>
          </ButtonBlock>
        </form>
      </Wrapper>
    </UserInfoBlock>
  );
};

export default UserInfo;
