import { atom } from 'recoil';

interface scrollAtom {
  isScrollOver: boolean;
}

export const isScrollOverAtom = atom({
  key: 'SCROLL_IS_OPEN',
  default: false,
});
