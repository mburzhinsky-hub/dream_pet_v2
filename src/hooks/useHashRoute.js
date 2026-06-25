import { useEffect, useState } from 'react';
import { getRouteFromHash } from '../routing/hashRouter.js';

export function useHashRoute() {
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRouteFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}
