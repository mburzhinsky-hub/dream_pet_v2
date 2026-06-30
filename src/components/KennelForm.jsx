import { useState } from 'react';
import { Bone, Camera, Info, Send, UploadCloud } from 'lucide-react';
import { DEFAULT_IMAGE } from '../data/catalog.js';
import { breedCatalog } from '../data/breeds.js';
import { cities } from '../data/cities.js';
import { statuses } from '../data/statuses.js';
import { parsePrice } from '../utils/price.js';

const emptyForm = {
  name: '', breed: '', city: '', sex: 'Сука', age: '', weight: '', height: '', color: '', temperament: '', price: '', status: 'Свободен', documents: '', kennel: '', phone: '', telegram: '', image: '',
};

export function KennelForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [fileName, setFileName] = useState('');

  function update(key, value) { setForm((current) => ({ ...current, [key]: value })); }

  function uploadPhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => update('image', reader.result);
    reader.readAsDataURL(file);
  }

  function submit(event) {
    event.preventDefault();
    const puppy = {
      ...form,
      id: Date.now(),
      name: form.name || 'Новый щенок',
      breed: form.breed || 'Порода не указана',
      city: form.city || 'Город не указан',
      age: form.age || 'Возраст уточняется',
      weight: form.weight || 'Вес уточняется',
      height: form.height || 'Рост уточняется',
      color: form.color || 'Окрас уточняется',
      temperament: form.temperament || 'Темперамент уточняется',
      documents: form.documents || 'Документы уточняются',
      kennel: form.kennel || 'Питомник Dream Pet',
      price: form.price ? `${parsePrice(form.price).toLocaleString('ru-RU')} ₽` : 'Цена по запросу',
      phone: form.phone || '+7 999 000-00-00',
      telegram: form.telegram || '@dreampet',
      image: form.image || DEFAULT_IMAGE,
      moderationStatus: 'На модерации',
      ownerType: 'user',
      createdAt: new Date().toLocaleString('ru-RU'),
      updatedAt: '',
    };
    onAdd(puppy);
    setFileName('');
    setForm(emptyForm);
  }

  const fields = [
    ['name', 'Кличка'], ['age', 'Возраст'], ['weight', 'Вес'], ['height', 'Рост'], ['color', 'Окрас'], ['temperament', 'Темперамент'], ['price', 'Цена'], ['documents', 'Документы'], ['kennel', 'Название питомника'], ['phone', 'Телефон'], ['telegram', 'Telegram'], ['image', 'Ссылка на фото'],
  ];

  return (
    <section className="kennel-section" id="kennels">
      <div className="kennel-copy">
        <span className="eyebrow"><Bone size={16} /> Для питомников и заводчиков</span>
        <h2>Разместите помёт за несколько минут</h2>
        <p>Покупатели увидят красивую карточку с фото, характеристиками, документами и контактами. Каждый щенок — отдельная понятная карточка.</p>
        <div className="photo-guide">
          <h3><Camera size={18} /> Гайд по фото для единого шаблона</h3>
          <ul>
            <li>1 главное фото щенка по центру, при дневном свете.</li>
            <li>Фон чистый: плед, диван, трава или однотонная стена.</li>
            <li>Без коллажей, водяных знаков, скриншотов и лишнего текста.</li>
            <li>Лучший формат: горизонтальное фото 4:3 или 16:9, лицо видно полностью.</li>
          </ul>
        </div>
        <div className="mini-steps" id="how">
          <div><strong>01</strong><span>Загрузите фото</span></div>
          <div><strong>02</strong><span>Заполните шаблон</span></div>
          <div><strong>03</strong><span>Получайте обращения</span></div>
        </div>
      </div>

      <form className="kennel-form" onSubmit={submit}>
        <label className="wide upload-box">
          <span><UploadCloud size={16} /> Фото щенка с устройства</span>
          <input type="file" accept="image/*" onChange={uploadPhoto} />
          <strong>{fileName || 'Нажмите или перетащите фото щенка'}</strong>
          <small>Фото сохранится в карточке в вашем браузере. Для реального сервера позже подключим загрузку файлов.</small>
        </label>

        <label>
          <span>Порода</span>
          <select value={form.breed} onChange={(e) => update('breed', e.target.value)}>
            <option value="">Выберите породу</option>
            {breedCatalog.map((breed) => <option key={breed.name}>{breed.name}</option>)}
          </select>
        </label>
        <label>
          <span>Город</span>
          <select value={form.city} onChange={(e) => update('city', e.target.value)}>
            <option value="">Выберите город</option>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </label>

        {fields.map(([key, label]) => (
          <label key={key} className={key === 'image' || key === 'temperament' ? 'wide' : ''}>
            <span>{label}</span>
            <input value={form[key]} onChange={(e) => update(key, e.target.value)} placeholder={label} />
          </label>
        ))}
        <label>
          <span>Пол</span>
          <select value={form.sex} onChange={(e) => update('sex', e.target.value)}><option>Сука</option><option>Кобель</option></select>
        </label>
        <label>
          <span>Статус</span>
          <select value={form.status} onChange={(e) => update('status', e.target.value)}>{statuses.map((status) => <option key={status}>{status}</option>)}</select>
        </label>
        <div className="form-note wide"><Info size={17} /> Все объявления выглядят единообразно: одно фото, единые поля, понятный статус и контакты.</div>
        <button className="primary-btn form-submit" type="submit"><Send size={19} /> Отправить на модерацию</button>
      </form>
    </section>
  );
}
