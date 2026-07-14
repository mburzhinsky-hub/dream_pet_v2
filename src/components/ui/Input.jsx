import { useId } from 'react';

export function Input({ label, hint, error, id, className = '', ...props }) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const descriptionId = `${inputId}-description`;

  return (
    <label className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`.trim()} htmlFor={inputId}>
      {label && <span className="ui-field__label">{label}</span>}
      <input className="ui-field__control" id={inputId} aria-invalid={Boolean(error)} aria-describedby={(hint || error) ? descriptionId : undefined} {...props} />
      {(error || hint) && <span className="ui-field__message" id={descriptionId}>{error || hint}</span>}
    </label>
  );
}
