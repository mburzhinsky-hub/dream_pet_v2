const STATUS_MAP = {
  available: { label: 'Доступен', tone: 'success' },
  booked: { label: 'Забронирован', tone: 'warning' },
  sold: { label: 'Продан', tone: 'neutral' },
  published: { label: 'Опубликовано', tone: 'success' },
  pending: { label: 'На модерации', tone: 'warning' },
  rejected: { label: 'Отклонено', tone: 'danger' },
};

export function StatusBadge({ status, label, tone, className = '' }) {
  const config = STATUS_MAP[status] || {};
  const resolvedLabel = label || config.label || status || 'Статус не указан';
  const resolvedTone = tone || config.tone || 'neutral';

  return <span className={`ui-status-badge ui-status-badge--${resolvedTone} ${className}`.trim()}>{resolvedLabel}</span>;
}
