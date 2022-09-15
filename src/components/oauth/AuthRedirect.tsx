import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const AuthRedirect = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const navigation = useNavigate();
  const location = useLocation();
  const { social } = useParams();

  useEffect(() => {
    if (social) {
      getAccessToken(social);
    }
    console.log(authToken);
    navigation('/');
  }, []);

  const getAccessToken = async (social: string) => {
    let token;
    // github, naver, kakao, google 분기 처리 후 서버와 통신 후 refresh토큰과 access토근 얻어오기
    switch (social) {
      case 'google':
        token = location.state as string;
        console.log(token);
        setAuthToken({ [social]: token });
        break;
      case 'kakao':
      case 'github':
        token = new URL(window.location.href).searchParams.get('code') as string;
        setAuthToken({ [social]: token });
        break;
      case 'naver':
        token = location.hash.split('=')[1].split('&')[0] as string;
        console.log(token);
        setAuthToken({ [social]: token });
        break;
      default:
        alert('로그인 오류 새로고침 후 다시 시도해주세요.');
        break;
    }
  };

  return <div>로딩중</div>;
};

export default AuthRedirect;
