# DREAM PET — Task 1.6 final refactoring notes

## Что исправлено после условной приёмки

1. `App.jsx` очищен от основной бизнес-логики.
   - Состояние объявлений вынесено в `src/hooks/usePuppies.js`.
   - Фильтры и рекомендации вынесены в `src/hooks/usePuppyFilters.js`.
   - Работа с `localStorage` вынесена в `src/services/puppyStorage.js`.
   - Модерационные операции вынесены в `src/services/puppyModeration.js`.

2. `HomePage.jsx` перестал быть сборщиком всего приложения.
   - Главная теперь содержит hero, подбор породы, преимущества и превью каталога.
   - Каталог, кабинет, админка, форма питомника и гайды стали самостоятельными route-level pages.

3. Добавлена детальная страница щенка.
   - Новый файл: `src/pages/PuppyDetailsPage.jsx`.
   - URL-формат: `#/puppies/:id`.
   - Модальный сценарий больше не является единственным способом открыть карточку.

4. Добавлена базовая маршрутизация без тяжёлой зависимости.
   - Новый файл: `src/routing/hashRouter.js`.
   - Новый hook: `src/hooks/useHashRoute.js`.
   - Навигация работает через hash routes, что подходит для GitHub Pages и Vite MVP.

5. Роли и доступ зафиксированы в коде.
   - Новый файл: `src/data/roles.js`.
   - Новый компонент: `src/components/AccessGate.jsx`.
   - Добавлен демо-переключатель роли в Header.
   - Админка доступна только роли `admin`.
   - Кабинет и размещение доступны ролям `kennel` и `admin`.

6. Сборка проверена.
   - `npm install` — успешно.
   - `npm run build` — успешно.
