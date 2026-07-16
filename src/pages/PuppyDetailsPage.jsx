import { ArrowLeft, MessageCircle, PawPrint, Phone } from 'lucide-react';
import { DEFAULT_IMAGE } from '../data/catalog.js';
import { replaceBrokenDogImage } from '../utils/imageFallback.js';

export function PuppyDetailsPage({ puppy }) {
  if (!puppy) {
    return (
      <section className="page-shell routed-page">
        <div className="empty-state">
          <PawPrint size={34} />
          <h2>Карточка щенка не найдена</h2>
          <p>Объявление могло быть удалено, отклонено или ещё не опубликовано.</p>
          <a className="primary-btn" href="#/catalog">Вернуться в каталог</a>
        </div>
      </section>
    );
  }

  const details = [
    ['Порода', puppy.breed],
    ['Город', puppy.city],
    ['Пол', puppy.sex],
    ['Возраст', puppy.age],
    ['Вес', puppy.weight],
    ['Рост', puppy.height],
    ['Окрас', puppy.color],
    ['Темперамент', puppy.temperament],
    ['Документы', puppy.documents],
    ['Питомник', puppy.kennel],
    ['Статус', puppy.status],
  ];

  return (
    <section className="page-shell routed-page puppy-details-page">
      <a className="back-link" href="#/catalog"><ArrowLeft size={18} /> Назад в каталог</a>
      <article className="details-card">
        <img
          className="details-photo"
          src={puppy.image || DEFAULT_IMAGE}
          alt={`${puppy.name}, ${puppy.breed}`}
          onError={(event) => replaceBrokenDogImage(event, puppy.id || puppy.breed)}
        />
        <div className="details-info">
          <span className="eyebrow"><PawPrint size={15} /> Детальная карточка щенка</span>
          <h1>{puppy.name}</h1>
          <p className="modal-price">{puppy.price}</p>
          <div className="detail-grid">
            {details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
          <div className="modal-actions">
            <a className="primary-btn" href={`tel:${puppy.phone}`}><Phone size={18} /> Позвонить</a>
            <a className="outline-btn" href={`https://t.me/${String(puppy.telegram).replace('@', '')}`}><MessageCircle size={18} /> Telegram</a>
          </div>
        </div>
      </article>
    </section>
  );
}
