import styled from '@emotion/styled';
import COLOR from '../../constants/colors';
import Flex from '../../styles/Flex';
import { Link } from 'react-router-dom';

interface favoriteProps {
  favoriteIsOpen: boolean;
}

interface menuWidthProp {
  widthProp: string;
}

const NavigationContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 4rem;
  ${Flex({ alignItems: 'center' })}
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.08);
  z-index: 9999;
  background-color: white;
`;

const NavigationBlock = styled.div`
  width: 1180px;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  top: 0px;
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 100%;
`;

const WrapRightNav = styled.div`
  ${Flex({ justifyContent: 'space-between', columnGap: '1rem' })}
  height:100%;
`;

const NavMenu = styled.div`
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${({ widthProp }: menuWidthProp) => widthProp};
`;

const MyPageMenu = styled.div`
  flex: 1;
  width: 100%;
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
`;

const MenuBtn = styled.div`
  font-weight: 700;
  width: 100%;
  height: 50%;
  ${Flex({ alignItems: 'center' })}
  border-radius:15%;
  cursor: pointer;
`;

const Favorites = styled.div`
  display: ${({ favoriteIsOpen }: favoriteProps) => (favoriteIsOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 10%;
  height: 200px;
  position: fixed;
  margin: 0 auto;
  top: 4rem;
  cursor: default;
  box-shadow: 0px 4px 5px ${COLOR.GRAY_100};
  padding: 1rem;
  z-index: 9999;
  background-color: ${COLOR.WHITE};
`;

const FavoriteList = styled.div`
  height: 2rem;
  border: 1px solid blue;
`;

const GpsContainer = styled.div`
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${({ widthProp }: menuWidthProp) => widthProp};

  svg {
    width: 20px;
    height: 20px;
  }
`;

const UserBlock = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;
`;

const SearchByText = styled.div``;

const UploadStudyLink = styled(Link)`
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${({ widthProp }: menuWidthProp) => widthProp};
  font-weight: 700;
`;

export {
  NavigationContainer,
  Wrapper,
  NavigationBlock,
  LoginButton,
  CategoryBlock,
  NavMenu,
  Favorites,
  MenuBtn,
  FavoriteList,
  GpsContainer,
  UserBlock,
  MyPageMenu,
  WrapRightNav,
  SearchByText,
  UploadStudyLink,
};
