import React, { Children, createContext, useContext, useState } from 'react';
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
  UserBlock,
  MyPageMenu,
} from './HeaderNavigation.styles';

import { GpsIcon } from '../@icons';
import MyPageList from '../mypage/MyPageList';
import { Link } from 'react-router-dom';
import SearchMenu from './SearchMenu';

const HeaderNavigation = () => {
  const openModal = useContext(modalContext)?.openModal;

  const handleOpenModal = () => {
    openModal?.(<LoginModal />);
  };

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false);
  const [gpsIsOpen, setGpsIsOpen] = useState(false);

  const [myPageIsOpen, setMyPageIsOpen] = useState(false);

  return (
    <>
      <NavigationContainer>
        <NavigationBlock>
          <Wrapper>
            <Link to="/">로고</Link>
            <CategoryBlock>
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
            <UserBlock>
              <MyPageMenu
                widthProp={NavMenuWidth.myPage}
                onMouseEnter={() => {
                  setMyPageIsOpen(true);
                }}
                onMouseLeave={() => setMyPageIsOpen(false)}
              >
                <MenuBtn onClick={() => setMyPageIsOpen(true)}>마이 페이지</MenuBtn>
                <MyPageList myPageIsOpen={myPageIsOpen} />
              </MyPageMenu>
              <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
            </UserBlock>
          </Wrapper>
        </NavigationBlock>
      </NavigationContainer>
    </>
  );
};

export default HeaderNavigation;
