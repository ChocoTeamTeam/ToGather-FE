import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getUser } from 'src/apis/user';
import { userSelector } from 'src/contexts/UserAtom';
import Breadcrumb from '../breadCrumb/Breadcrumb';
import { UserInfoBlock } from './UserInfo.styles';
import UserInfoEdit from './UserInfoEdit';

const UserInfo = () => {
  const [user, setUser] = useRecoilState(userSelector);
  const navigate = useNavigate();

  console.log(user);

  const getUserById = () => {
    if (!user.id) {
      alert('잘못된 접근입니다.');
      navigate('/');
      return;
    }
    const userId = user.id;
    getUser(userId)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserById();
  }, []);

  if (!user.id) return;

  return (
    <UserInfoBlock>
      <Breadcrumb>마이 페이지 - 내정보</Breadcrumb>
      <UserInfoEdit user={user} />
    </UserInfoBlock>
  );
};

export default UserInfo;
