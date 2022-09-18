import { atom } from 'recoil';

interface data {
  nickname: string;
  profileImage: string;
  // position: string;
  techStackDtos: number[];
  [key: string]: any;
}

export const userInputAtom = atom<data>({
  key: 'USER_FORM',
  default: {
    nickname: '',
    profileImage: '',
    // position: '',
    techStackDtos: [],
  },
});
