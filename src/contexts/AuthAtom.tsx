import { atom, selector } from 'recoil';

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

export const signupToKenAtom = atom({
  key: 'SIGINUP_TOKEN',
  default: '',
});

export const signupToKenSelector = selector({
  key: 'SIGINUP_GET_TOKEN',
  get: ({ get }) => get(signupToKenAtom),
});
