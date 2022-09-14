import { atom } from 'recoil';

interface data {
  nickname: string;
  profile: string;
  position: string;
  tech: string | string[];
  [key: string]: string | string[];
}

export const registerAtom = atom<data>({
  key: 'REGISTER_FORM',
  default: {
    nickname: '',
    profile: '',
    position: '',
    tech: [],
  },
});
