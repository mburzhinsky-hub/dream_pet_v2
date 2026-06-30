export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  puppy: '/puppy',
  login: '/login',
  register: '/register',
  kennels: '/kennels',
  account: '/account',
  admin: '/admin',
  guides: '/guides',
  notFound: '/404',
};

const staticRoutes = new Set([
  ROUTES.home,
  ROUTES.catalog,
  ROUTES.login,
  ROUTES.register,
  ROUTES.kennels,
  ROUTES.account,
  ROUTES.admin,
  ROUTES.guides,
]);

export function getRouteFromHash(hash) {
  const cleanHash = hash.replace(/^#/, '') || ROUTES.home;
  const [path] = cleanHash.split('?');
  const normalizedPath = normalizePath(path);

  if (normalizedPath.startsWith('/puppies/')) {
    const puppyId = normalizedPath.split('/')[2];

    return {
      name: puppyId ? ROUTES.puppy : ROUTES.notFound,
      puppyId: puppyId || null,
      path: normalizedPath,
      isKnown: Boolean(puppyId),
    };
  }

  if (staticRoutes.has(normalizedPath)) {
    return {
      name: normalizedPath,
      path: normalizedPath,
      puppyId: null,
      isKnown: true,
    };
  }

  return {
    name: ROUTES.notFound,
    path: normalizedPath,
    puppyId: null,
    isKnown: false,
  };
}

function normalizePath(path) {
  const safePath = path || ROUTES.home;
  const withSlash = safePath.startsWith('/') ? safePath : `/${safePath}`;
  const withoutTrailingSlash = withSlash.length > 1 ? withSlash.replace(/\/+$/, '') : withSlash;
  return withoutTrailingSlash || ROUTES.home;
}
