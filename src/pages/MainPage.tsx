import HeaderNavigation from "src/components/Header/HeaderNavigation";
import StudyListContainer from "src/components/Study/StudyContainer";
import Statistics from "../components/Statistics/Statistics";




const MainPage = () => {


  return (
    <>
      <HeaderNavigation />

      <Statistics />

      <StudyListContainer />  
    </>
  );
}

export default MainPage;

