import { useState } from 'react';
import { Ban, Check, ShieldCheck, Trash2 } from 'lucide-react';
import { CompactAdCard } from '../components/CompactAdCard.jsx';
import { setModerationStatus } from '../services/puppyModeration.js';

export function AdminPage({ puppies, onUpdate, onDelete }) {
  const [statusFilter, setStatusFilter] = useState('Все');
  const userAds = puppies.filter((puppy) => puppy.ownerType === 'user');
  const visibleAds = userAds.filter((puppy) => statusFilter === 'Все' || puppy.moderationStatus === statusFilter);

  function setModeration(puppy, moderationStatus) {
    onUpdate(setModerationStatus(puppy, moderationStatus));
  }

  return (
    <section className="admin-section" id="admin">
      <div className="section-head section-head--stacked">
        <div>
          <span className="eyebrow"><ShieldCheck size={15} /> Кабинет администратора</span>
          <h2>Модерация объявлений</h2>
        </div>
        <p>Демо-админка для проверки карточек перед публикацией: можно одобрить, отклонить или удалить объявление. В реальной версии сюда добавим авторизацию, роли и журнал действий.</p>
      </div>

      <div className="admin-toolbar">
        {['Все', 'На модерации', 'Опубликовано', 'Отклонено'].map((status) => (
          <button key={status} type="button" className={statusFilter === status ? 'active' : ''} onClick={() => setStatusFilter(status)}>{status}</button>
        ))}
      </div>

      <div className="dashboard-grid dashboard-grid--admin">
        <div className="dashboard-card"><strong>{userAds.length}</strong><span>пользовательских объявлений</span></div>
        <div className="dashboard-card"><strong>{userAds.filter((ad) => ad.moderationStatus === 'На модерации').length}</strong><span>ожидают проверки</span></div>
        <div className="dashboard-card"><strong>{userAds.filter((ad) => ad.moderationStatus === 'Опубликовано').length}</strong><span>доступны в каталоге</span></div>
        <div className="dashboard-card"><strong>{userAds.filter((ad) => ad.moderationStatus === 'Отклонено').length}</strong><span>отклонены</span></div>
      </div>

      {visibleAds.length === 0 ? (
        <div className="empty-state empty-state--admin">
          <ShieldCheck size={34} />
          <h3>Нет объявлений в этом статусе</h3>
          <p>Когда заводчик отправит карточку, она появится здесь на проверке.</p>
        </div>
      ) : (
        <div className="admin-list">
          {visibleAds.map((puppy) => (
            <CompactAdCard
              key={puppy.id}
              puppy={puppy}
              actions={<>
                <button className="approve-btn" type="button" onClick={() => setModeration(puppy, 'Опубликовано')}><Check size={16} /> Одобрить</button>
                <button className="reject-btn" type="button" onClick={() => setModeration(puppy, 'Отклонено')}><Ban size={16} /> Отклонить</button>
                <button className="danger-btn" type="button" onClick={() => onDelete(puppy.id)}><Trash2 size={16} /> Удалить</button>
              </>}
            />
          ))}
        </div>
      )}
    </section>
  );
}
