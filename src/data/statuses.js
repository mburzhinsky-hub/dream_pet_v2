export const puppyStatuses = [
  'Свободен',
  'Бронь',
  'В резерве',
  'Ожидает переезда',
  'Продан',
  'Недоступен',
];

export const puppyStatusCatalog = [
  {
    id: 'available',
    name: 'Свободен',
    description: 'Щенок доступен для просмотра, общения с питомником и бронирования.',
    isPublic: true,
    isFinal: false,
  },
  {
    id: 'reserved',
    name: 'Бронь',
    description: 'По щенку уже есть предварительная договоренность, но сделка еще не завершена.',
    isPublic: true,
    isFinal: false,
  },
  {
    id: 'hold',
    name: 'В резерве',
    description: 'Питомник временно снял щенка с активного предложения до уточнения условий.',
    isPublic: false,
    isFinal: false,
  },
  {
    id: 'ready-to-move',
    name: 'Ожидает переезда',
    description: 'Покупатель выбран, щенок готовится к передаче новому владельцу.',
    isPublic: true,
    isFinal: false,
  },
  {
    id: 'sold',
    name: 'Продан',
    description: 'Щенок уже нашел владельца, объявление можно оставить только в архиве.',
    isPublic: false,
    isFinal: true,
  },
  {
    id: 'unavailable',
    name: 'Недоступен',
    description: 'Объявление временно или окончательно недоступно для покупателей.',
    isPublic: false,
    isFinal: true,
  },
];

export const moderationStatuses = [
  'Черновик',
  'На модерации',
  'Нужны правки',
  'Опубликовано',
  'Отклонено',
  'Скрыто питомником',
  'Снято с публикации',
  'В архиве',
];

export const moderationStatusCatalog = [
  {
    id: 'draft',
    name: 'Черновик',
    description: 'Объявление сохранено в кабинете, но еще не отправлено на проверку.',
    ownerCanEdit: true,
    adminCanPublish: false,
  },
  {
    id: 'moderation',
    name: 'На модерации',
    description: 'Объявление отправлено администратору на проверку перед публикацией.',
    ownerCanEdit: false,
    adminCanPublish: true,
  },
  {
    id: 'needs-changes',
    name: 'Нужны правки',
    description: 'Администратор вернул объявление питомнику для исправления данных или фото.',
    ownerCanEdit: true,
    adminCanPublish: false,
  },
  {
    id: 'published',
    name: 'Опубликовано',
    description: 'Объявление прошло модерацию и показывается в каталоге.',
    ownerCanEdit: true,
    adminCanPublish: false,
  },
  {
    id: 'rejected',
    name: 'Отклонено',
    description: 'Объявление не прошло проверку и не будет показано покупателям.',
    ownerCanEdit: true,
    adminCanPublish: false,
  },
  {
    id: 'hidden-by-owner',
    name: 'Скрыто питомником',
    description: 'Питомник временно убрал объявление из публичного каталога.',
    ownerCanEdit: true,
    adminCanPublish: false,
  },
  {
    id: 'unpublished',
    name: 'Снято с публикации',
    description: 'Администратор снял объявление с публикации после проверки или жалобы.',
    ownerCanEdit: true,
    adminCanPublish: true,
  },
  {
    id: 'archived',
    name: 'В архиве',
    description: 'Объявление закрыто и хранится только в истории питомника или админки.',
    ownerCanEdit: false,
    adminCanPublish: false,
  },
];

export const paymentStatuses = [
  'Не требуется',
  'Ожидает оплаты',
  'Оплачено',
  'Просрочено',
  'Возврат',
];

export const accountStatuses = [
  'Активен',
  'На проверке',
  'Требует подтверждения',
  'Ограничен',
  'Заблокирован',
];

export const statuses = puppyStatuses;
