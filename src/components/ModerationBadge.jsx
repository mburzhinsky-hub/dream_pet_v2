export function ModerationBadge({ value }) {
  const className = value === 'Опубликовано' ? 'approved' : value === 'Отклонено' ? 'rejected' : 'pending';
  return <span className={`moderation-badge ${className}`}>{value || 'Опубликовано'}</span>;
}
