import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  Baby,
  Bone,
  Camera,
  ChevronDown,
  ChevronRight,
  Dumbbell,
  Gift,
  Heart,
  Home,
  Info,
  ListChecks,
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
  UploadCloud,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react';
import './styles.css';

const BASE = import.meta.env.BASE_URL;
const logoSrc = `${BASE}logo.jpg`;

const heroImage =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1600&q=85';

const breedCatalog = [
  { name: 'Лабрадор ретривер', short: 'Лабрадор', count: '156 щенков', size: 'Крупный', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Французский бульдог', short: 'Французский бульдог', count: '98 щенков', size: 'Маленький', activity: 'Низкая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Вельш-корги пемброк', short: 'Корги', count: '87 щенков', size: 'Средний', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Померанский шпиц', short: 'Шпиц', count: '64 щенка', size: 'Маленький', activity: 'Средняя', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Немецкая овчарка', short: 'Немецкая овчарка', count: '120 щенков', size: 'Крупный', activity: 'Высокая', family: 'С детьми', experience: 'Опытный' },
  { name: 'Йоркширский терьер', short: 'Йоркширский терьер', count: '75 щенков', size: 'Маленький', activity: 'Средняя', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Золотистый ретривер', short: 'Голден ретривер', count: '143 щенка', size: 'Крупный', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Бигль', short: 'Бигль', count: '82 щенка', size: 'Средний', activity: 'Высокая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Такса', short: 'Такса', count: '91 щенок', size: 'Маленький', activity: 'Средняя', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Мопс', short: 'Мопс', count: '58 щенков', size: 'Маленький', activity: 'Низкая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Чихуахуа', short: 'Чихуахуа', count: '69 щенков', size: 'Маленький', activity: 'Низкая', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Джек-рассел-терьер', short: 'Джек-рассел', count: '77 щенков', size: 'Маленький', activity: 'Высокая', family: 'Активным', experience: 'Опытный' },
  { name: 'Сиба-ину', short: 'Сиба-ину', count: '49 щенков', size: 'Средний', activity: 'Средняя', family: 'Взрослым', experience: 'Опытный' },
  { name: 'Хаски', short: 'Хаски', count: '66 щенков', size: 'Крупный', activity: 'Высокая', family: 'Активным', experience: 'Опытный' },
  { name: 'Акита-ину', short: 'Акита-ину', count: '38 щенков', size: 'Крупный', activity: 'Средняя', family: 'Взрослым', experience: 'Опытный' },
  { name: 'Пудель', short: 'Пудель', count: '88 щенков', size: 'Средний', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Мальтипу', short: 'Мальтипу', count: '54 щенка', size: 'Маленький', activity: 'Низкая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Кавалер кинг чарльз спаниель', short: 'Кавалер', count: '41 щенок', size: 'Маленький', activity: 'Низкая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Доберман', short: 'Доберман', count: '35 щенков', size: 'Крупный', activity: 'Высокая', family: 'Активным', experience: 'Опытный' },
  { name: 'Ротвейлер', short: 'Ротвейлер', count: '29 щенков', size: 'Крупный', activity: 'Средняя', family: 'Взрослым', experience: 'Опытный' },
  { name: 'Самоед', short: 'Самоед', count: '46 щенков', size: 'Крупный', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Бордер-колли', short: 'Бордер-колли', count: '52 щенка', size: 'Средний', activity: 'Высокая', family: 'Активным', experience: 'Опытный' },
  { name: 'Кане-корсо', short: 'Кане-корсо', count: '31 щенок', size: 'Крупный', activity: 'Средняя', family: 'Взрослым', experience: 'Опытный' },
  { name: 'Английский бульдог', short: 'Английский бульдог', count: '27 щенков', size: 'Средний', activity: 'Низкая', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Цвергшнауцер', short: 'Цвергшнауцер', count: '44 щенка', size: 'Маленький', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
  { name: 'Бишон фризе', short: 'Бишон фризе', count: '39 щенков', size: 'Маленький', activity: 'Низкая', family: 'С детьми', experience: 'Новичок' },
  { name: 'Ши-тцу', short: 'Ши-тцу', count: '57 щенков', size: 'Маленький', activity: 'Низкая', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Американский булли', short: 'Американский булли', count: '33 щенка', size: 'Средний', activity: 'Средняя', family: 'Взрослым', experience: 'Опытный' },
  { name: 'Русский той', short: 'Русский той', count: '62 щенка', size: 'Маленький', activity: 'Низкая', family: 'Взрослым', experience: 'Новичок' },
  { name: 'Бернский зенненхунд', short: 'Бернский зенненхунд', count: '24 щенка', size: 'Крупный', activity: 'Средняя', family: 'С детьми', experience: 'Новичок' },
];

const breedImages = {
  'Лабрадор ретривер': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=400&q=80',
  'Французский бульдог': 'https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&w=400&q=80',
  'Вельш-корги пемброк': 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=400&q=80',
  'Померанский шпиц': 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=400&q=80',
  'Немецкая овчарка': 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=400&q=80',
  'Йоркширский терьер': 'https://images.unsplash.com/photo-1597633611385-17238892d086?auto=format&fit=crop&w=400&q=80',
  'Золотистый ретривер': 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=400&q=80',
  'Бигль': 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=400&q=80',
  'Такса': 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=400&q=80',
  'Мопс': 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80',
  'Чихуахуа': 'https://images.unsplash.com/photo-1605633866920-054c0f7c99fa?auto=format&fit=crop&w=400&q=80',
  'Джек-рассел-терьер': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80',
  'Сиба-ину': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80',
  'Хаски': 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=400&q=80',
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
    kennel: 'Nord Star Corgi',
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
    kennel: 'Family Spitz',
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

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Красноярск', 'Самара', 'Уфа', 'Ростов-на-Дону', 'Краснодар', 'Омск', 'Воронеж', 'Пермь', 'Волгоград', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск', 'Барнаул', 'Ульяновск', 'Иркутск', 'Хабаровск', 'Ярославль', 'Владивосток', 'Махачкала', 'Томск', 'Оренбург', 'Кемерово', 'Новокузнецк', 'Рязань', 'Астрахань', 'Пенза', 'Сочи'
];
const statuses = ['Свободен', 'Бронь', 'Продан'];
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85';
const fallbackBreedImage = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80';

function parsePrice(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}

function Header() {
  return (
    <>
      <div className="top-ad">
        <div className="top-ad__inner">
          <span className="top-ad__gift"><Gift size={22} /></span>
          <div className="top-ad__copy">
            <strong>АКЦИЯ ДЛЯ НОВЫХ ВЛАДЕЛЬЦЕВ</strong>
            <span>Премиум-корм + консультация кинолога — скидка 15% при выборе щенка на Dream Pet</span>
          </div>
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
          <a href="#breed-helper">Подобрать породу</a>
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

function FilterPanel({ filters, setFilters, recommendedBreeds }) {
  function update(key, value) {
    setFilters({ ...filters, [key]: value });
  }

  return (
    <section className="search-panel" aria-label="Поиск щенка">
      <div className="filter-field">
        <PawPrint size={22} />
        <label>
          <span>Порода</span>
          <select value={filters.breed} onChange={(e) => update('breed', e.target.value)}>
            <option value="">Любая порода</option>
            {breedCatalog.map((breed) => <option key={breed.name} value={breed.name}>{breed.name}</option>)}
          </select>
        </label>
        <ChevronDown size={18} />
      </div>

      <div className="filter-field">
        <MapPin size={22} />
        <label>
          <span>Город</span>
          <select value={filters.city} onChange={(e) => update('city', e.target.value)}>
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
          <select value={filters.sex} onChange={(e) => update('sex', e.target.value)}>
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
          <input value={filters.maxPrice} onChange={(e) => update('maxPrice', e.target.value)} placeholder="до, ₽" inputMode="numeric" />
        </label>
      </div>

      <button className="ghost-filter" type="button" onClick={() => document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth' })}><SlidersHorizontal size={19} /> Подобрать породу</button>
      <button className="primary-btn search-btn" type="button" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}><Search size={20} /> Найти щенка</button>

      <div className="breed-helper" id="breed-helper">
        <div className="helper-intro">
          <span><Sparkles size={16} /> Не знаете, какую породу выбрать?</span>
          <strong>Ответьте на 4 простых вопроса — покажем подходящие варианты.</strong>
        </div>
        <label>
          <span><Home size={16} /> Где будет жить?</span>
          <select value={filters.size} onChange={(e) => update('size', e.target.value)}>
            <option value="">Не важно</option>
            <option value="Маленький">Квартира / небольшой размер</option>
            <option value="Средний">Квартира или дом</option>
            <option value="Крупный">Дом / нужен крупный пёс</option>
          </select>
        </label>
        <label>
          <span><Dumbbell size={16} /> Активность</span>
          <select value={filters.activity} onChange={(e) => update('activity', e.target.value)}>
            <option value="">Не важно</option>
            <option value="Низкая">Спокойный компаньон</option>
            <option value="Средняя">Прогулки каждый день</option>
            <option value="Высокая">Спорт, поездки, активная жизнь</option>
          </select>
        </label>
        <label>
          <span><Baby size={16} /> Семья</span>
          <select value={filters.family} onChange={(e) => update('family', e.target.value)}>
            <option value="">Не важно</option>
            <option value="С детьми">Есть дети</option>
            <option value="Взрослым">Взрослая семья</option>
            <option value="Активным">Активный владелец</option>
          </select>
        </label>
        <label>
          <span><ListChecks size={16} /> Опыт</span>
          <select value={filters.experience} onChange={(e) => update('experience', e.target.value)}>
            <option value="">Не важно</option>
            <option value="Новичок">Первая собака</option>
            <option value="Опытный">Есть опыт</option>
          </select>
        </label>
        <div className="helper-result">
          <span>Подходят:</span>
          {recommendedBreeds.slice(0, 5).map((breed) => (
            <button type="button" key={breed.name} onClick={() => update('breed', breed.name)}>{breed.short}</button>
          ))}
        </div>
      </div>
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
          <div className="avatar-stack"><span /><span /><span /></div>
          <div><strong>Более 10 000 семей</strong><small>уже нашли своего друга</small></div>
          <Heart size={18} fill="currentColor" />
        </div>
        <div className="trust-card trust-card--verify">
          <ShieldCheck size={22} />
          <div><strong>Проверенные заводчики</strong><small>документы и актуальные карточки</small></div>
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
          <a href="#catalog">30 пород <ChevronRight size={16} /></a>
        </div>
        <div className="breed-row breed-row--scroll">
          {breedCatalog.map((breed) => (
            <button className="breed-item" type="button" key={breed.name} onClick={() => document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth' })}>
              <img src={breedImages[breed.name] || fallbackBreedImage} alt={breed.short} />
              <strong>{breed.short}</strong>
              <span>{breed.count}</span>
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
          <div><h3>{puppy.name}</h3><p>{puppy.breed}</p></div>
          <strong>{puppy.price}</strong>
        </div>
        <div className="puppy-meta">
          <span><MapPin size={14} />{puppy.city}</span><span>{puppy.sex}</span><span>{puppy.age}</span><span>{puppy.weight}</span>
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

function KennelForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '', breed: '', city: '', sex: 'Сука', age: '', weight: '', height: '', color: '', temperament: '', price: '', status: 'Свободен', documents: '', kennel: '', phone: '', telegram: '', image: '',
  });
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
    };
    onAdd(puppy);
    setFileName('');
    setForm({ name: '', breed: '', city: '', sex: 'Сука', age: '', weight: '', height: '', color: '', temperament: '', price: '', status: 'Свободен', documents: '', kennel: '', phone: '', telegram: '', image: '' });
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
        <button className="primary-btn form-submit" type="submit"><PawPrint size={19} /> Добавить карточку щенка</button>
      </form>
    </section>
  );
}

function App() {
  const [puppies, setPuppies] = useState(() => {
    const saved = localStorage.getItem('dream-pet-puppies-v4');
    return saved ? JSON.parse(saved) : initialPuppies;
  });
  const [filters, setFilters] = useState({ breed: '', city: '', sex: '', maxPrice: '', size: '', activity: '', family: '', experience: '' });
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const recommendedBreeds = useMemo(() => {
    const scored = breedCatalog.map((breed) => {
      let score = 0;
      if (!filters.size || breed.size === filters.size) score += 1;
      if (!filters.activity || breed.activity === filters.activity) score += 1;
      if (!filters.family || breed.family === filters.family) score += 1;
      if (!filters.experience || breed.experience === filters.experience) score += 1;
      return { ...breed, score };
    });
    return scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  }, [filters.size, filters.activity, filters.family, filters.experience]);

  const filteredPuppies = useMemo(() => puppies.filter((puppy) => {
    const maxPrice = parsePrice(filters.maxPrice);
    const puppyPrice = parsePrice(puppy.price);
    const hasHelper = filters.size || filters.activity || filters.family || filters.experience;
    const recommendedNames = new Set(recommendedBreeds.slice(0, 12).map((breed) => breed.name));
    return (!filters.breed || puppy.breed === filters.breed)
      && (!filters.city || puppy.city === filters.city)
      && (!filters.sex || puppy.sex === filters.sex)
      && (!maxPrice || puppyPrice <= maxPrice)
      && (filters.breed || !hasHelper || recommendedNames.has(puppy.breed));
  }), [puppies, filters, recommendedBreeds]);

  function addPuppy(puppy) {
    const next = [puppy, ...puppies];
    setPuppies(next);
    localStorage.setItem('dream-pet-puppies-v4', JSON.stringify(next));
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <Header />
      <Hero />
      <div className="page-shell">
        <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />
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
