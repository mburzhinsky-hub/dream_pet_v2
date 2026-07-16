import { DEFAULT_IMAGE } from '../data/catalog.js';
import { replaceBrokenDogImage } from '../utils/imageFallback.js';
import { ModerationBadge } from './ModerationBadge.jsx';

export function CompactAdCard({ puppy, onOpen, actions }) {
  return (
    <article className="account-ad-card">
      <img
        src={puppy.image || DEFAULT_IMAGE}
        alt={`${puppy.name}, ${puppy.breed}`}
        onError={(event) => replaceBrokenDogImage(event, puppy.id || puppy.breed)}
      />
      <div className="account-ad-card__body">
        <div className="account-ad-card__top">
          <div>
            <h3>{puppy.name}</h3>
            <p>{puppy.breed} · {puppy.city}</p>
          </div>
          <ModerationBadge value={puppy.moderationStatus} />
        </div>
        <div className="account-ad-meta">
          <span>{puppy.sex}</span><span>{puppy.age}</span><span>{puppy.weight}</span><span>{puppy.price}</span>
        </div>
        <p className="account-ad-note">{puppy.temperament}</p>
        <div className="account-ad-actions">
          {onOpen ? (
            <button className="outline-btn" type="button" onClick={() => onOpen(puppy)}>Открыть</button>
          ) : (
            <a className="outline-btn" href={`#/puppies/${puppy.id}`}>Открыть</a>
          )}
          {actions}
        </div>
      </div>
    </article>
  );
}
