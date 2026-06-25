import { useState } from 'react';
import { Edit3, PawPrint, Save, Trash2, UserRound } from 'lucide-react';
import { CompactAdCard } from '../components/CompactAdCard.jsx';
import { ModerationBadge } from '../components/ModerationBadge.jsx';
import { breedCatalog, cities, statuses } from '../data/catalog.js';
import { markForModeration } from '../services/puppyModeration.js';
import { parsePrice } from '../utils/price.js';

export function AccountPage({ puppies, onUpdate, onDelete }) {
  const myAds = puppies.filter((puppy) => puppy.ownerType === 'user');
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

  function startEdit(puppy) {
    setEditingId(puppy.id);
    setDraft({ ...puppy, rawPrice: parsePrice(puppy.price) || '' });
  }

  function updateDraft(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function saveDraft(event) {
    event.preventDefault();
    const updated = {
      ...draft,
      price: draft.rawPrice ? `${parsePrice(draft.rawPrice).toLocaleString('ru-RU')} ₽` : draft.price,

    };
    delete updated.rawPrice;
    onUpdate(markForModeration(updated));
    setEditingId(null);
    setDraft(null);
  }

  return (
    <section className="account-section" id="cabinet">
      <div className="section-head section-head--stacked">
        <div>
          <span className="eyebrow"><UserRound size={15} /> Личный кабинет питомника</span>
          <h2>Мои объявления</h2>
        </div>
        <p>Здесь заводчик видит свои карточки, может отредактировать данные, изменить цену, статус щенка или удалить объявление. После редактирования карточка снова уходит на модерацию.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card"><strong>{myAds.length}</strong><span>всего моих объявлений</span></div>
        <div className="dashboard-card"><strong>{myAds.filter((ad) => ad.moderationStatus === 'На модерации').length}</strong><span>на модерации</span></div>
        <div className="dashboard-card"><strong>{myAds.filter((ad) => ad.moderationStatus === 'Опубликовано').length}</strong><span>опубликовано</span></div>
        <div className="dashboard-card"><strong>{myAds.filter((ad) => ad.moderationStatus === 'Отклонено').length}</strong><span>нужно исправить</span></div>
      </div>

      {myAds.length === 0 ? (
        <div className="empty-state">
          <PawPrint size={34} />
          <h3>У вас пока нет объявлений</h3>
          <p>Заполните форму выше — карточка появится здесь и отправится администратору на проверку.</p>
          <a className="primary-btn" href="#/kennels">Разместить щенка</a>
        </div>
      ) : (
        <div className="account-list">
          {myAds.map((puppy) => editingId === puppy.id && draft ? (
            <form className="edit-form" key={puppy.id} onSubmit={saveDraft}>
              <div className="edit-form__head">
                <h3>Редактирование объявления</h3>
                <ModerationBadge value={puppy.moderationStatus} />
              </div>
              <label><span>Кличка</span><input value={draft.name} onChange={(e) => updateDraft('name', e.target.value)} /></label>
              <label><span>Порода</span><select value={draft.breed} onChange={(e) => updateDraft('breed', e.target.value)}>{breedCatalog.map((breed) => <option key={breed.name}>{breed.name}</option>)}</select></label>
              <label><span>Город</span><select value={draft.city} onChange={(e) => updateDraft('city', e.target.value)}>{cities.map((city) => <option key={city}>{city}</option>)}</select></label>
              <label><span>Пол</span><select value={draft.sex} onChange={(e) => updateDraft('sex', e.target.value)}><option>Сука</option><option>Кобель</option></select></label>
              <label><span>Возраст</span><input value={draft.age} onChange={(e) => updateDraft('age', e.target.value)} /></label>
              <label><span>Вес</span><input value={draft.weight} onChange={(e) => updateDraft('weight', e.target.value)} /></label>
              <label><span>Рост</span><input value={draft.height} onChange={(e) => updateDraft('height', e.target.value)} /></label>
              <label><span>Окрас</span><input value={draft.color} onChange={(e) => updateDraft('color', e.target.value)} /></label>
              <label className="wide"><span>Темперамент</span><input value={draft.temperament} onChange={(e) => updateDraft('temperament', e.target.value)} /></label>
              <label><span>Цена, ₽</span><input value={draft.rawPrice} onChange={(e) => updateDraft('rawPrice', e.target.value)} /></label>
              <label><span>Статус щенка</span><select value={draft.status} onChange={(e) => updateDraft('status', e.target.value)}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
              <label className="wide"><span>Документы</span><input value={draft.documents} onChange={(e) => updateDraft('documents', e.target.value)} /></label>
              <label><span>Питомник</span><input value={draft.kennel} onChange={(e) => updateDraft('kennel', e.target.value)} /></label>
              <label><span>Телефон</span><input value={draft.phone} onChange={(e) => updateDraft('phone', e.target.value)} /></label>
              <label><span>Telegram</span><input value={draft.telegram} onChange={(e) => updateDraft('telegram', e.target.value)} /></label>
              <label className="wide"><span>Ссылка на фото</span><input value={draft.image} onChange={(e) => updateDraft('image', e.target.value)} /></label>
              <div className="edit-actions wide">
                <button className="primary-btn" type="submit"><Save size={18} /> Сохранить и отправить на модерацию</button>
                <button className="outline-btn" type="button" onClick={() => { setEditingId(null); setDraft(null); }}>Отмена</button>
              </div>
            </form>
          ) : (
            <CompactAdCard
              key={puppy.id}
              puppy={puppy}
             
              actions={<>
                <button className="soft-btn" type="button" onClick={() => startEdit(puppy)}><Edit3 size={16} /> Редактировать</button>
                <button className="danger-btn" type="button" onClick={() => onDelete(puppy.id)}><Trash2 size={16} /> Удалить</button>
              </>}
            />
          ))}
        </div>
      )}
    </section>
  );
}
