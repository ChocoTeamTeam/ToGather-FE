import { atom, selector } from 'recoil';
import { IuserType } from 'src/components/type/userType';

export const userAtom = atom<IuserType>({
  key: 'USER',
  default: { id: '', techStackDtos: [], nickname: '', profileImage: '' },
});

export const userSelector = selector<IuserType>({
  key: 'USER_SELECTOR',
  get: ({ get }) => {
    const prevData = get(userAtom);
    const filteredStack = prevData.techStackDtos.reduce((acc: any, cur: any) => {
      let temp = [...acc, { value: cur.id, label: cur.name }];
      return temp;
    }, []);

    return { ...prevData, techStackDtos: filteredStack };
  },
  set: ({ set }, newValue) => set(userAtom, newValue),
});
