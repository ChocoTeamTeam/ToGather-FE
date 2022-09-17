import { RefObject, useEffect } from 'react';

const useObserveElement = (target: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const targetElement = target.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
        }
      });
    });

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [target.current]);
};

export default useObserveElement;
