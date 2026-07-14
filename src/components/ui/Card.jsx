export function Card({ as: Component = 'article', interactive = false, padding = 'md', className = '', children, ...props }) {
  const classes = [
    'ui-card',
    `ui-card--padding-${padding}`,
    interactive ? 'ui-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');

  return <Component className={classes} {...props}>{children}</Component>;
}
