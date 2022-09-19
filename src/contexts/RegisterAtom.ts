import { atom } from 'recoil';

interface data {
  nickname: string;
  profileImage: string;
  // position: string;
  techStackDtos: number[];
  [key: string]: any;
}

export const registerAtom = atom<data>({
  key: 'REGISTER_FORM',
  default: {
    nickname: '',
    profileImage: '',
    // position: '',
    techStackDtos: [],
  },
});
