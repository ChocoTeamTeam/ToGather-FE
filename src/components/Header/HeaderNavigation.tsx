import React, { useContext, useState } from 'react';
import { modalContext } from '../../contexts/ModalContext';
import NavMenuWidth from 'src/constants/NavMenuWidth';
import LoginModal from '../Login/LoginModal';
import {
  NavigationContainer,
  NavigationBlock,
  Wrapper,
  LoginButton,
  CategoryBlock,
  NavMenu,
  Favorites,
  MenuBtn,
  GpsContainer,
} from './HeaderNavigation.styles';
import SearchMenu from './SearchMenu';
import { GpsIcon } from '../@icons';
import { useRecoilValue } from 'recoil';
import { isScrollOverAtom } from '../../contexts/isScrollOverAtom';

const HeaderNavigation = () => {
  const openModal = useContext(modalContext)?.openModal;

  const handleOpenModal = () => {
    openModal?.(<LoginModal />);
  };

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);
  const [gpsIsOpen, setGpsIsOpen] = useState(false);

  return (
    <>
      <NavigationContainer>
        <NavigationBlock>
          <Wrapper>
            <div>로고</div>
            <CategoryBlock isScrollOver={useRecoilValue(isScrollOverAtom)}>
              <NavMenu
                widthProp={NavMenuWidth.search}
                onMouseEnter={() => {
                  setSearchIsOpen(true);
                }}
                onMouseLeave={() => setSearchIsOpen(false)}
              >
                <MenuBtn onClick={() => setSearchIsOpen(true)}>공고 검색</MenuBtn>
                <SearchMenu searchIsOpen={searchIsOpen} />
              </NavMenu>
              <NavMenu
                widthProp={NavMenuWidth.favorite}
                onMouseEnter={() => {
                  setFavoriteIsOpen(true);
                }}
                onMouseLeave={() => setFavoriteIsOpen(false)}
              >
                <MenuBtn onClick={() => setFavoriteIsOpen(true)}>좋아요 한 공고</MenuBtn>
                <Favorites favoriteIsOpen={favoriteIsOpen}></Favorites>
              </NavMenu>
              <GpsContainer
                widthProp={NavMenuWidth.gps}
                onMouseEnter={() => {
                  setGpsIsOpen(true);
                }}
                onMouseLeave={() => setGpsIsOpen(false)}
                onClick={() => setGpsIsOpen(true)}
              >
                <GpsIcon />
              </GpsContainer>
            </CategoryBlock>
            <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
          </Wrapper>
        </NavigationBlock>
      </NavigationContainer>
    </>
  );
};

export default HeaderNavigation;
