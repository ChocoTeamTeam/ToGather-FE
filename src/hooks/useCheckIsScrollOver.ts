import { Dispatch, SetStateAction } from 'react';
import { throttle } from 'lodash';

const useCheckIsScrollOver = (
  setStateFunction: Dispatch<SetStateAction<boolean>>,
  percentage: number
) => {
  const observerScroll = throttle(() => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollRate = (scrollTop / height) * 100;

    if (scrollRate > percentage) setStateFunction(true);
    else setStateFunction(false);
  }, 5000);

  observerScroll();
};

export default useCheckIsScrollOver;
