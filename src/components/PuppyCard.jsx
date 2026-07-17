import { Heart, MapPin, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { DEFAULT_IMAGE } from '../data/catalog.js';
import { replaceBrokenDogImage } from '../utils/imageFallback.js';

export function PuppyCard({ puppy, onOpen }) {
  const [favorite, setFavorite] = useState(false);
  const statusClass = puppy.status === 'Продан' ? 'sold' : puppy.status === 'Бронь' ? 'booked' : 'free';

  function openDetails() {
    if (onOpen) {
      onOpen(puppy);
      return;
    }
    window.location.hash = `/puppies/${puppy.id}`;
  }

  return (
    <article className="puppy-card reveal-card">
      <button className="puppy-card__open" type="button" onClick={openDetails} aria-label={`Открыть карточку ${puppy.name}`} />
      <div className="puppy-photo">
        <img
          src={puppy.image || DEFAULT_IMAGE}
          alt={`${puppy.name}, ${puppy.breed}`}
          onError={(event) => replaceBrokenDogImage(event, puppy.id || puppy.breed)}
        />
        <span className={`status ${statusClass}`}><ShieldCheck size={13} /> {puppy.status === 'Свободен' ? 'Проверено' : puppy.status}</span>
        <button
          className={`favorite ${favorite ? 'favorite--active' : ''}`}
          type="button"
          aria-label={favorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          aria-pressed={favorite}
          onClick={(event) => {
            event.stopPropagation();
            setFavorite((value) => !value);
          }}
        >
          <Heart size={19} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="puppy-body">
        <div className="puppy-title">
          <div>
            <h3>{puppy.breed}</h3>
            <p>{puppy.name}</p>
          </div>
        </div>
        <div className="puppy-meta">
          <span><MapPin size={14} />{puppy.city}</span>
          <span>{puppy.age}</span>
        </div>
        <strong className="puppy-price">{puppy.price}</strong>
      </div>
    </article>
  );
}
