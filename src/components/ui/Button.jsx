import { Loader } from './Loader.jsx';

export function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  children,
  type,
  onClick,
  ...props
}) {
  const isNativeButton = Component === 'button';
  const isDisabled = disabled || loading;
  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    loading ? 'ui-button--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  function handleClick(event) {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <Component
      className={classes}
      type={isNativeButton ? (type || 'button') : undefined}
      disabled={isNativeButton ? isDisabled : undefined}
      aria-disabled={!isNativeButton && isDisabled ? true : undefined}
      aria-busy={loading || undefined}
      onClick={handleClick}
      {...props}
    >
      {loading && <Loader size="sm" label="Выполняется" inline />}
      <span className="ui-button__content">{children}</span>
    </Component>
  );
}
