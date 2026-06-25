export function markForModeration(puppy) {
  return {
    ...puppy,
    moderationStatus: 'На модерации',
    updatedAt: new Date().toLocaleString('ru-RU'),
  };
}

export function setModerationStatus(puppy, moderationStatus) {
  return {
    ...puppy,
    moderationStatus,
    updatedAt: new Date().toLocaleString('ru-RU'),
  };
}
