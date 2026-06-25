import { Heart, Home, MapPin } from 'lucide-react';
import { breedIcons, DEFAULT_IMAGE } from '../data/catalog.js';

export function PuppyCard({ puppy, onOpen }) {
  const statusClass = puppy.status === 'Продан' ? 'sold' : puppy.status === 'Бронь' ? 'booked' : 'free';

  return (
    <article className="puppy-card reveal-card">
      <div className="puppy-photo">
        <img src={puppy.image || DEFAULT_IMAGE} alt={`${puppy.name}, ${puppy.breed}`} />
        <span className={`status ${statusClass}`}>{puppy.status}</span>
        <button className="favorite" type="button" aria-label="Добавить в избранное"><Heart size={19} /></button>
      </div>

      <div className="puppy-body">
        <div className="puppy-title">
          <div><h3>{puppy.name}</h3><p><span className="inline-breed-icon">{breedIcons[puppy.breed] || '🐾'}</span>{puppy.breed}</p></div>
          <strong>{puppy.price}</strong>
        </div>
        <div className="puppy-meta">
          <span><MapPin size={14} />{puppy.city}</span><span>{puppy.sex}</span><span>{puppy.age}</span><span>{puppy.weight}</span>
        </div>
        <p className="temperament">{puppy.temperament}</p>
        <div className="kennel"><Home size={15} /> {puppy.kennel}</div>
        {onOpen ? (
          <button className="outline-btn" type="button" onClick={() => onOpen(puppy)}>Подробнее</button>
        ) : (
          <a className="outline-btn" href={`#/puppies/${puppy.id}`}>Подробнее</a>
        )}
      </div>
    </article>
  );
}
