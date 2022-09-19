import React, { useContext, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authSelector } from 'src/contexts/AuthAtom';
import { modalContext } from 'src/contexts/ModalContext';
import RegisterModal from '../Login/RegisterModal';

const UserLoginAuth = () => {
  const authToken = useRecoilValue(authSelector);
  const openModal = useContext(modalContext)?.openModal;

  useEffect(() => {
    console.log(authToken);
    if (authToken.signUpToken) {
      registerModalOpen();
    }
  }, []);

  const registerModalOpen = () => {
    openModal?.(<RegisterModal />);
  };

  return <></>;
};

export default UserLoginAuth;
