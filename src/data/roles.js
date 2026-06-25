export const roles = {
  visitor: {
    id: 'visitor',
    label: 'Обычный посетитель',
    description: 'Смотрит главную, гайды, контент и рекламные блоки.',
  },
  buyer: {
    id: 'buyer',
    label: 'Покупатель',
    description: 'Подбирает породу, смотрит каталог и связывается с питомником.',
  },
  kennel: {
    id: 'kennel',
    label: 'Питомник',
    description: 'Создаёт и редактирует объявления о щенках.',
  },
  admin: {
    id: 'admin',
    label: 'Администратор',
    description: 'Модерирует объявления и управляет качеством каталога.',
  },
};

export const roleOptions = Object.values(roles);

export const routeAccess = {
  '/': ['visitor', 'buyer', 'kennel', 'admin'],
  '/catalog': ['visitor', 'buyer', 'kennel', 'admin'],
  '/puppy': ['visitor', 'buyer', 'kennel', 'admin'],
  '/kennels': ['kennel', 'admin'],
  '/account': ['kennel', 'admin'],
  '/admin': ['admin'],
  '/guides': ['visitor', 'buyer', 'kennel', 'admin'],
};

export function canAccessRoute(role, routeName) {
  return (routeAccess[routeName] || routeAccess['/']).includes(role);
}
