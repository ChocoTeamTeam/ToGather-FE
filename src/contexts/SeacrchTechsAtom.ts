import { atom, selector } from 'recoil';
import { StudyListTest } from '../mocks/StudyListTest';

interface searchedTechsType {
  [key: string]: boolean;
}

const searchTechsAtom = atom<searchedTechsType>({
  key: 'SEARCHED_TECHS',
  default: {},
});

const searchTechsSelectObject = selector({
  key: 'SEARCHED_TECHS_OBJECT',
  get: ({ get }) => {
    get(searchTechsAtom);
  },
});

const filteredStudy = selector({
  key: 'SEARCHED_STUDY_LIST',
  get: ({ get }) => {
    const searchedTechs: searchedTechsType = get(searchTechsAtom);
    if (Object.keys(searchedTechs).length !== 0) {
      const res = StudyListTest.filter(({ techs }) => {
        return techs.some((tech) => {
          return searchedTechs[String(tech)];
        });
      });
      return res;
    } else return StudyListTest;
  },
});

export { searchTechsAtom, filteredStudy };
