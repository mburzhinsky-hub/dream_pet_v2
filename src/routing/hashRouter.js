export function getRouteFromHash(hash) {
  const cleanHash = hash.replace(/^#/, '') || '/';
  const [path] = cleanHash.split('?');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedPath.startsWith('/puppies/')) {
    return {
      name: '/puppy',
      puppyId: normalizedPath.split('/')[2],
      path: normalizedPath,
    };
  }

  return {
    name: normalizedPath,
    path: normalizedPath,
    puppyId: null,
  };
}
