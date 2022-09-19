import StudyListContainer from 'src/components/Study/StudyContainer';
import Statistics from '../components/Statistics/Statistics';


const MainPage = () => {
  return (
    <>
      <UserLoginAuth />
      <HeaderNavigation />
      <Statistics />
      <StudyListContainer />
    </>
  );
};

export default MainPage;
