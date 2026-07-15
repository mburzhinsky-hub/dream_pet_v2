import { Heart, Home, MapPin, Ruler, ShieldCheck } from 'lucide-react';
import { breedIcons, DEFAULT_IMAGE } from '../data/catalog.js';

export function PuppyCard({ puppy, onOpen }) {
  const statusClass = puppy.status === 'Продан' ? 'sold' : puppy.status === 'Бронь' ? 'booked' : 'free';

  return (
    <article className="puppy-card reveal-card">
      <div className="puppy-photo">
        <img src={puppy.image || DEFAULT_IMAGE} alt={`${puppy.name}, ${puppy.breed}`} loading="lazy" />
        <span className={`status ${statusClass}`}><ShieldCheck size={13} /> {puppy.status}</span>
        <button className="favorite" type="button" aria-label={`Добавить ${puppy.name} в избранное`}><Heart size={19} /></button>
      </div>
      <div className="puppy-body">
        <div className="puppy-title">
          <div><h3>{puppy.name}</h3><p><span className="inline-breed-icon" aria-hidden="true">{breedIcons[puppy.breed] || '🐾'}</span>{puppy.breed}</p></div>
          <strong>{puppy.price}</strong>
        </div>
        <div className="puppy-meta">
          <span><MapPin size={14} />{puppy.city}</span><span>{puppy.sex}</span><span>{puppy.age}</span><span><Ruler size={14} />{puppy.weight}</span>
        </div>
        <p className="temperament">{puppy.temperament}</p>
        <div className="kennel"><Home size={15} /> <span>{puppy.kennel}</span></div>
        {onOpen ? (
          <button className="outline-btn puppy-card__action" type="button" onClick={() => onOpen(puppy)}>Подробнее</button>
        ) : (
          <a className="outline-btn puppy-card__action" href={`#/puppies/${puppy.id}`}>Подробнее</a>
        )}
      </div>
    </article>
  );
}
