export function Loader({ size = 'md', label = 'Загрузка', inline = false, className = '' }) {
  const classes = [
    'ui-loader',
    `ui-loader--${size}`,
    inline ? 'ui-loader--inline' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} role="status" aria-live="polite">
      <span className="ui-loader__spinner" aria-hidden="true" />
      {label && <span className="ui-loader__label">{label}</span>}
    </span>
  );
}
