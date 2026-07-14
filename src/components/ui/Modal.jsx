import { useEffect, useId } from 'react';
import { X } from 'lucide-react';

export function Modal({ open, onClose, title, children, footer, size = 'md', className = '' }) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose?.();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ui-modal-backdrop" onMouseDown={onClose}>
      <section className={`ui-modal ui-modal--${size} ${className}`.trim()} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} onMouseDown={(event) => event.stopPropagation()}>
        <header className="ui-modal__header">
          {title && <h2 id={titleId}>{title}</h2>}
          <button className="ui-modal__close" type="button" onClick={onClose} aria-label="Закрыть окно"><X size={20} /></button>
        </header>
        <div className="ui-modal__body">{children}</div>
        {footer && <footer className="ui-modal__footer">{footer}</footer>}
      </section>
    </div>
  );
}
