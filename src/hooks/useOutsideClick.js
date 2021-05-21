import { useEffect } from 'react';

function useOutsideClick(handler) {
  useEffect(() => {
    const element = document.getElementById('dropdown');
    const listener = (e) => {
      if (element && !element.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [handler]);
}

export default useOutsideClick;
