import { MessageCircle, PawPrint, Phone, X } from 'lucide-react';
import { DEFAULT_IMAGE } from '../data/catalog.js';

export function PuppyModal({ puppy, onClose }) {
  if (!puppy) return null;

  const details = [
    ['Порода', puppy.breed], ['Город', puppy.city], ['Пол', puppy.sex], ['Возраст', puppy.age], ['Вес', puppy.weight], ['Рост', puppy.height], ['Окрас', puppy.color], ['Темперамент', puppy.temperament], ['Документы', puppy.documents], ['Питомник', puppy.kennel], ['Статус', puppy.status],
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Закрыть"><X size={22} /></button>
        <img className="modal-photo" src={puppy.image || DEFAULT_IMAGE} alt={`${puppy.name}, ${puppy.breed}`} />
        <div className="modal-info">
          <span className="eyebrow"><PawPrint size={15} /> Карточка щенка</span>
          <h2>{puppy.name}</h2>
          <p className="modal-price">{puppy.price}</p>
          <div className="detail-grid">
            {details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
          <div className="modal-actions">
            <a className="primary-btn" href={`tel:${puppy.phone}`}><Phone size={18} /> Позвонить</a>
            <a className="outline-btn" href={`https://t.me/${String(puppy.telegram).replace('@', '')}`}><MessageCircle size={18} /> Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
