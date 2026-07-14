import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

export function Select({ label, hint, error, id, options = [], placeholder, className = '', children, ...props }) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const descriptionId = `${selectId}-description`;

  return (
    <label className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`.trim()} htmlFor={selectId}>
      {label && <span className="ui-field__label">{label}</span>}
      <span className="ui-select-wrap">
        <select className="ui-field__control ui-field__select" id={selectId} aria-invalid={Boolean(error)} aria-describedby={(hint || error) ? descriptionId : undefined} {...props}>
          {placeholder && <option value="">{placeholder}</option>}
          {children || options.map((option) => <option key={option.value ?? option.id} value={option.value}>{option.label}</option>)}
        </select>
        <ChevronDown className="ui-select-wrap__icon" size={18} aria-hidden="true" />
      </span>
      {(error || hint) && <span className="ui-field__message" id={descriptionId}>{error || hint}</span>}
    </label>
  );
}
