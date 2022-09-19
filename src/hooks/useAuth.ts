import { authAtom } from 'src/contexts/AuthAtom';
import { useRecoilState } from 'recoil';
import React from 'react';

const useAuth = () => {
  const [auth, setauth] = useRecoilState(authAtom);
};

export default useAuth;
