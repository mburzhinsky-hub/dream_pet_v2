# DREAM PET — Задача 1.7: маршрутизация

## Что добавлено

1. Формализована hash-маршрутизация для GitHub Pages в `src/routing/hashRouter.js`.
2. Добавлены страницы:
   - `#/` — главная;
   - `#/catalog` — каталог;
   - `#/puppies/:id` — детальная карточка щенка;
   - `#/login` — вход;
   - `#/register` — регистрация;
   - `#/account` — кабинет питомника;
   - `#/admin` — админка;
   - `#/guides` — гайды;
   - `#/404` — fallback для неизвестных маршрутов.
3. Добавлены страницы `LoginPage`, `RegisterPage`, `NotFoundPage`.
4. Обновлена навигация в `Header.jsx`.
5. Обновлена карта доступа в `src/data/roles.js`.

## Protected routes

Защищённые маршруты работают через `AccessGate` и `routeAccess`:

- `#/kennels` — доступен ролям `kennel`, `admin`;
- `#/account` — доступен ролям `kennel`, `admin`;
- `#/admin` — доступен только роли `admin`.

Открытые маршруты доступны всем ролям:

- `#/`;
- `#/catalog`;
- `#/puppies/:id`;
- `#/login`;
- `#/register`;
- `#/guides`;
- `#/404`.

## GitHub Pages

Проект оставлен на hash routes (`#/...`), поэтому прямые переходы не ломают GitHub Pages. Конфиг Vite сохранён:

```js
base: '/dream_pet_v2/'
```

## Проверка

Команда сборки выполнена успешно:

```bash
npm run build
```

Результат: Vite production build собран без ошибок.
