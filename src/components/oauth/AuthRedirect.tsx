import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { checkLogin } from 'src/apis/auth';
import { userAtom } from 'src/contexts/UserAtom';
import Api from 'src/apis/Api';
import { HeadersDefaults } from 'axios';

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const AuthRedirect = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const navigation = useNavigate();
  const location = useLocation();
  const { social } = useParams();

  useEffect(() => {
    if (social) {
      getSignToken(social);
      navigation('/');
    }
  }, []);

  const getSignToken = async (social: string) => {
    let token;
    switch (social) {
      case 'google':
      case 'kakao':
      case 'github':
        token = new URL(window.location.href).searchParams.get('code') as string;
        break;
      case 'naver':
        token = location.hash.split('=')[1].split('&')[0] as string;
        break;
      default:
        alert('새로고침 후 다시 시도해주세요.');
        return null;
    }
    try {
      await checkLogin(social, token).then((res) => {
        if (res.data.loginResult) {
          //기존 회원
          setAuthToken({ refreshToken: res.data.refreshToken });
          localStorage.setItem(
            'user',
            JSON.stringify({
              id: res.data.id,
              profileImage: res.data.profileImage,
              techStackDtos: res.data.techStackDtos,
            })
          );
          Api.defaults.headers = {
            Authorization: `Bearer ${res.data.accessToken}`,
          } as CommonHeaderProperties;
        } else {
          //신규 회원
          setAuthToken({ signUpToken: res.data.signUpToken });
        }
        navigation('/');
      });
    } catch (e) {
      console.error(`에러 :${e}`);
      alert('잘못된 접근 입니다.');
    }
  };

  return <div>로딩중</div>;
};

export default AuthRedirect;
