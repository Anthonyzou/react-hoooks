import { useEffect, useState } from 'react';

export const useReachability = () => {
  const [state, setState] = useState<boolean>(true);

  useEffect(() => {
    const online = setState.bind(null, true);
    const offline = setState.bind(null, false);

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  return state;
};
