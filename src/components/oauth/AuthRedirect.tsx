import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom, signupToKenAtom } from 'src/contexts/AuthAtom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AuthRedirect = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const [signToken, setSignToken] = useRecoilState(signupToKenAtom);
  const navigation = useNavigate();
  const location = useLocation();
  const { social } = useParams();

  useEffect(() => {
    if (social) {
      getSignToken(social);
    }
    navigation('/');
  }, []);

  const getSignToken = async (social: string) => {
    let token;
    // github, naver, kakao, google 분기 처리 후 서버와 통신 후 signToken 받아오기
    switch (social) {
      case 'google':
        token = location.state as string;
        break;
      case 'kakao':
      case 'github':
        token = new URL(window.location.href).searchParams.get('code') as string;
        break;
      case 'naver':
        token = location.hash.split('=')[1].split('&')[0] as string;
        break;
      default:
        alert('새로고침 후 다시 시도해주세요.');
        return;
    }
  };

  return <div>로딩중</div>;
};

export default AuthRedirect;
