import { atom, GetRecoilValue, selector } from 'recoil';

interface data {
  [key: string]: string;
}

export const authAtom = atom<data>({
  key: 'AUTH_TOKEN',
  default: {},
});

export const authSelector = selector<data>({
  key: 'AUTH_SELECTOR',
  get: ({ get }) => get(authAtom),
});
