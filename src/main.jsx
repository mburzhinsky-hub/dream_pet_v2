import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  Bone,
  ChevronDown,
  ChevronRight,
  Gift,
  Heart,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react';
import './styles.css';

const BASE = import.meta.env.BASE_URL;
const logoSrc = `${BASE}logo.jpg`;

const heroImage =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1600&q=85';

const breedImages = {
  'Лабрадор': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=400&q=80',
  'Французский бульдог': 'https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&w=400&q=80',
  'Корги': 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=400&q=80',
  'Шпиц': 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=400&q=80',
  'Немецкая овчарка': 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=400&q=80',
  'Йоркширский терьер': 'https://images.unsplash.com/photo-1597633611385-17238892d086?auto=format&fit=crop&w=400&q=80',
};

const initialPuppies = [
  {
    id: 1,
    name: 'Луна',
    breed: 'Лабрадор ретривер',
    city: 'Москва',
    sex: 'Сука',
    age: '2 месяца',
    weight: '3.8 кг',
    height: '28 см',
    color: 'Кремовый',
    temperament: 'Ласковая, спокойная',
    documents: 'РКФ, ветпаспорт, прививки',
    kennel: 'Royal Gold Home',
    price: '95 000 ₽',
    status: 'Свободен',
    phone: '+7 999 111-22-33',
    telegram: '@royalgoldhome',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Марс',
    breed: 'Вельш-корги пемброк',
    city: 'Санкт-Петербург',
    sex: 'Кобель',
    age: '2.5 месяца',
    weight: '4.1 кг',
    height: '25 см',
    color: 'Рыже-белый',
    temperament: 'Активный, контактный',
    documents: 'Щенячья метрика, ветпаспорт',
    kennel: 'Nord Star Spitz',
    price: '120 000 ₽',
    status: 'Свободен',
    phone: '+7 999 222-33-44',
    telegram: '@nordstar',
    image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Бруно',
    breed: 'Померанский шпиц',
    city: 'Казань',
    sex: 'Кобель',
    age: '3 месяца',
    weight: '1.4 кг',
    height: '18 см',
    color: 'Оранжевый соболь',
    temperament: 'Уверенный, семейный',
    documents: 'РКФ, чип, ветпаспорт',
    kennel: 'Family Labrador',
    price: '70 000 ₽',
    status: 'Бронь',
    phone: '+7 999 333-44-55',
    telegram: '@familydog',
    image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Мия',
    breed: 'Французский бульдог',
    city: 'Сочи',
    sex: 'Сука',
    age: '2 месяца',
    weight: '2.5 кг',
    height: '21 см',
    color: 'Палевый',
    temperament: 'Игривая, смелая',
    documents: 'Ветпаспорт, прививки',
    kennel: 'Sunny Frenchies',
    price: '110 000 ₽',
    status: 'Свободен',
    phone: '+7 999 444-55-66',
    telegram: '@sunnyfrenchies',
    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Оскар',
    breed: 'Немецкая овчарка',
    city: 'Екатеринбург',
    sex: 'Кобель',
    age: '3.5 месяца',
    weight: '8.2 кг',
    height: '39 см',
    color: 'Чепрачный',
    temperament: 'Умный, охранный',
    documents: 'РКФ, тесты родителей',
    kennel: 'Strong Guard Kennel',
    price: '85 000 ₽',
    status: 'Свободен',
    phone: '+7 999 555-66-77',
    telegram: '@strongguard',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    name: 'Тесса',
    breed: 'Йоркширский терьер',
    city: 'Москва',
    sex: 'Сука',
    age: '2 месяца',
    weight: '900 г',
    height: '16 см',
    color: 'Сталь с подпалом',
    temperament: 'Нежная, ручная',
    documents: 'Метрика, ветпаспорт',
    kennel: 'Tiny York Family',
    price: '78 000 ₽',
    status: 'Продан',
    phone: '+7 999 666-77-88',
    telegram: '@tinyyork',
    image: 'https://images.unsplash.com/photo-1597633611385-17238892d086?auto=format&fit=crop&w=900&q=85',
  },
];

const breeds = [
  ['Лабрадор', '156 щенков'],
  ['Французский бульдог', '98 щенков'],
  ['Корги', '87 щенков'],
  ['Шпиц', '64 щенка'],
  ['Немецкая овчарка', '120 щенков'],
  ['Йоркширский терьер', '75 щенков'],
];

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Сочи', 'Екатеринбург'];
const statuses = ['Свободен', 'Бронь', 'Продан'];
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85';

function parsePrice(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}

function Header() {
  return (
    <>
      <div className="top-ad">
        <div className="top-ad__inner">
          <span className="top-ad__gift"><Gift size={19} /></span>
          <strong>АКЦИЯ!</strong>
          <span>Премиум-корм для щенков — скидка 15% для новых владельцев</span>
          <button type="button">Получить скидку</button>
          <X className="top-ad__close" size={18} />
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dream Pet">
          <img src={logoSrc} alt="Dream Pet logo" />
          <span>
            <strong>Dream Pet</strong>
            <small>найди друга мечты</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Главная навигация">
          <a href="#catalog">Каталог щенков</a>
          <a href="#kennels">Питомники</a>
          <a href="#how">Как это работает</a>
          <a href="#why">О нас</a>
          <a href="#blog">Блог</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" type="button" aria-label="Избранное"><Heart size={20} /></button>
          <button className="icon-btn" type="button" aria-label="Профиль"><UserRound size={20} /></button>
          <a className="primary-btn primary-btn--small" href="#kennels">Разместить щенка</a>
          <button className="mobile-menu" type="button" aria-label="Меню"><Menu size={22} /></button>
        </div>
      </header>
    </>
  );
}

function FilterPanel({ filters, setFilters }) {
  return (
    <section className="search-panel" aria-label="Поиск щенка">
      <div className="filter-field">
        <PawPrint size={22} />
        <label>
          <span>Порода</span>
          <select value={filters.breed} onChange={(e) => setFilters({ ...filters, breed: e.target.value })}>
            <option value="">Любая порода</option>
            {[...new Set(initialPuppies.map((p) => p.breed))].map((breed) => <option key={breed}>{breed}</option>)}
          </select>
        </label>
        <ChevronDown size={18} />
      </div>

      <div className="filter-field">
        <MapPin size={22} />
        <label>
          <span>Город</span>
          <select value={filters.city} onChange={(e) => setFilters({ ...filters, city: e.target.value })}>
            <option value="">Любой город</option>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </label>
        <ChevronDown size={18} />
      </div>

      <div className="filter-field">
        <Heart size={22} />
        <label>
          <span>Пол</span>
          <select value={filters.sex} onChange={(e) => setFilters({ ...filters, sex: e.target.value })}>
            <option value="">Любой</option>
            <option>Сука</option>
            <option>Кобель</option>
          </select>
        </label>
        <ChevronDown size={18} />
      </div>

      <div className="filter-field">
        <WalletCards size={22} />
        <label>
          <span>Цена</span>
          <input value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} placeholder="до, ₽" inputMode="numeric" />
        </label>
      </div>

      <button className="ghost-filter" type="button"><SlidersHorizontal size={19} /> Ещё фильтры</button>
      <button className="primary-btn search-btn" type="button"><Search size={20} /> Найти щенка</button>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <div className="eyebrow"><Sparkles size={16} /> Маркетплейс проверенных помётов</div>
        <h1>Найдите щенка, <span>который подходит именно вам</span></h1>
        <p>Проверенные питомники, здоровые щенки и полная поддержка на каждом этапе — от первого просмотра карточки до переезда домой.</p>

        <div className="hero-stats" aria-label="Статистика Dream Pet">
          <div><strong>2 500+</strong><span>щенков</span></div>
          <div><strong>280+</strong><span>питомников</span></div>
          <div><strong>56</strong><span>городов</span></div>
          <div><strong>98%</strong><span>довольных клиентов</span></div>
        </div>
      </div>

      <div className="hero-visual reveal reveal--delay">
        <div className="hero-glow" />
        <img className="hero-dog" src={heroImage} alt="Счастливый щенок Dream Pet" />
        <div className="trust-card trust-card--families">
          <div className="avatar-stack">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>Более 10 000 семей</strong>
            <small>уже нашли своего друга</small>
          </div>
          <Heart size={18} fill="currentColor" />
        </div>
        <div className="trust-card trust-card--verify">
          <ShieldCheck size={22} />
          <div>
            <strong>Проверенные заводчики</strong>
            <small>документы и актуальные карточки</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function BreedsAndBenefits() {
  const benefits = [
    [ShieldCheck, 'Проверенные питомники', 'Только надёжные заводчики и реальные помёты'],
    [Stethoscope, 'Здоровье щенков', 'Вакцинация, ветпаспорт и понятные документы'],
    [MessageCircle, 'Поддержка 24/7', 'Поможем с выбором и после покупки'],
    [BadgeCheck, 'Честные цены', 'Без скрытых комиссий и непонятных условий'],
  ];

  return (
    <section className="split-section" id="why">
      <div className="panel panel--breeds">
        <div className="section-head">
          <h2>Популярные породы</h2>
          <a href="#catalog">Смотреть все <ChevronRight size={16} /></a>
        </div>
        <div className="breed-row">
          {breeds.map(([name, count]) => (
            <button className="breed-item" type="button" key={name}>
              <img src={breedImages[name]} alt={name} />
              <strong>{name}</strong>
              <span>{count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="panel panel--benefits">
        <h2>Почему выбирают Dream Pet</h2>
        <div className="benefit-grid">
          {benefits.map(([Icon, title, text]) => (
            <article className="benefit-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PuppyCard({ puppy, onOpen }) {
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
          <div>
            <h3>{puppy.name}</h3>
            <p>{puppy.breed}</p>
          </div>
          <strong>{puppy.price}</strong>
        </div>

        <div className="puppy-meta">
          <span><MapPin size={14} />{puppy.city}</span>
          <span>{puppy.sex}</span>
          <span>{puppy.age}</span>
          <span>{puppy.weight}</span>
        </div>

        <p className="temperament">{puppy.temperament}</p>
        <div className="kennel"><Home size={15} /> {puppy.kennel}</div>
        <button className="outline-btn" type="button" onClick={() => onOpen(puppy)}>Подробнее</button>
      </div>
    </article>
  );
}

function PuppyModal({ puppy, onClose }) {
  if (!puppy) return null;
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
    <div className="modal-backdrop" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Закрыть"><X size={22} /></button>
        <img className="modal-photo" src={puppy.image || DEFAULT_IMAGE} alt={`${puppy.name}, ${puppy.breed}`} />
        <div className="modal-info">
          <span className="eyebrow"><PawPrint size={15} /> Карточка щенка</span>
          <h2>{puppy.name}</h2>
          <p className="modal-price">{puppy.price}</p>
          <div className="detail-grid">
            {details.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
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

function KennelForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '', breed: '', city: '', sex: 'Сука', age: '', weight: '', height: '', color: '', temperament: '', price: '', status: 'Свободен', documents: '', kennel: '', phone: '', telegram: '', image: '',
  });

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
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
    };
    onAdd(puppy);
    setForm({ name: '', breed: '', city: '', sex: 'Сука', age: '', weight: '', height: '', color: '', temperament: '', price: '', status: 'Свободен', documents: '', kennel: '', phone: '', telegram: '', image: '' });
  }

  const fields = [
    ['name', 'Кличка'], ['breed', 'Порода'], ['city', 'Город'], ['age', 'Возраст'], ['weight', 'Вес'], ['height', 'Рост'], ['color', 'Окрас'], ['temperament', 'Темперамент'], ['price', 'Цена'], ['documents', 'Документы'], ['kennel', 'Название питомника'], ['phone', 'Телефон'], ['telegram', 'Telegram'], ['image', 'Ссылка на фото'],
  ];

  return (
    <section className="kennel-section" id="kennels">
      <div className="kennel-copy">
        <span className="eyebrow"><Bone size={16} /> Для питомников и заводчиков</span>
        <h2>Разместите помёт за несколько минут</h2>
        <p>Покупатели увидят красивую карточку с фото, характеристиками, документами и контактами. Каждый щенок — отдельная понятная карточка.</p>
        <div className="mini-steps" id="how">
          <div><strong>01</strong><span>Добавьте данные</span></div>
          <div><strong>02</strong><span>Проверьте карточку</span></div>
          <div><strong>03</strong><span>Получайте обращения</span></div>
        </div>
      </div>

      <form className="kennel-form" onSubmit={submit}>
        {fields.map(([key, label]) => (
          <label key={key} className={key === 'image' || key === 'temperament' ? 'wide' : ''}>
            <span>{label}</span>
            <input value={form[key]} onChange={(e) => update(key, e.target.value)} placeholder={label} />
          </label>
        ))}
        <label>
          <span>Пол</span>
          <select value={form.sex} onChange={(e) => update('sex', e.target.value)}>
            <option>Сука</option>
            <option>Кобель</option>
          </select>
        </label>
        <label>
          <span>Статус</span>
          <select value={form.status} onChange={(e) => update('status', e.target.value)}>
            {statuses.map((status) => <option key={status}>{status}</option>)}
          </select>
        </label>
        <button className="primary-btn form-submit" type="submit"><PawPrint size={19} /> Добавить карточку щенка</button>
      </form>
    </section>
  );
}

function App() {
  const [puppies, setPuppies] = useState(() => {
    const saved = localStorage.getItem('dream-pet-puppies-v3');
    return saved ? JSON.parse(saved) : initialPuppies;
  });
  const [filters, setFilters] = useState({ breed: '', city: '', sex: '', maxPrice: '' });
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const filteredPuppies = useMemo(() => puppies.filter((puppy) => {
    const maxPrice = parsePrice(filters.maxPrice);
    const puppyPrice = parsePrice(puppy.price);
    return (!filters.breed || puppy.breed === filters.breed)
      && (!filters.city || puppy.city === filters.city)
      && (!filters.sex || puppy.sex === filters.sex)
      && (!maxPrice || puppyPrice <= maxPrice);
  }), [puppies, filters]);

  function addPuppy(puppy) {
    const next = [puppy, ...puppies];
    setPuppies(next);
    localStorage.setItem('dream-pet-puppies-v3', JSON.stringify(next));
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <Header />
      <Hero />
      <div className="page-shell">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <BreedsAndBenefits />
        <section className="catalog" id="catalog">
          <div className="section-head">
            <div>
              <span className="eyebrow"><Sparkles size={15} /> Подобрано для вас</span>
              <h2>Щенки, которых хочется забрать домой</h2>
            </div>
            <p>{filteredPuppies.length} карточек</p>
          </div>
          <div className="puppy-grid">
            {filteredPuppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} onOpen={setSelectedPuppy} />)}
          </div>
        </section>
        <KennelForm onAdd={addPuppy} />
        <section className="soft-blog" id="blog">
          <span className="eyebrow"><Sparkles size={15} /> Полезное</span>
          <h2>Скоро здесь появятся гиды по выбору щенка, адаптации и уходу</h2>
        </section>
      </div>
      <PuppyModal puppy={selectedPuppy} onClose={() => setSelectedPuppy(null)} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
