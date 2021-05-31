import { useEffect } from 'react';

function useOutsideClick(el, handler) {
  useEffect(() => {
    const element = document.querySelector(el);
    const listener = (e) => {
      if (element && !element.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [el, handler]);
}

export default useOutsideClick;
