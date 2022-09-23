import HeaderNavigation from 'src/components/Header/HeaderNavigation';
import UserLoginAuth from 'src/components/oauth/UserLoginAuth';
import StudyListContainer from 'src/components/Study/StudyContainer';
import Statistics from '../components/Statistics/Statistics';

const MainPage = () => {
  return (
    <>
      <UserLoginAuth />
      <Statistics />
      <StudyListContainer />
    </>
  );
};

export default MainPage;
