import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  Baby,
  Bone,
  Camera,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Check,
  Ban,
  ChevronDown,
  ChevronRight,
  Dumbbell,
  Gift,
  Heart,
  Home,
  Info,
  ListChecks,
  Clock3,
  Edit3,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Stethoscope,
  Trash2,
  UploadCloud,
  UserRound,
  Users,
  WalletCards,
  Save,
  Send,
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
  'Лабрадор ретривер': 'https://loremflickr.com/640/640/labrador,puppy,dog?lock=101',
  'Французский бульдог': 'https://loremflickr.com/640/640/french-bulldog,puppy,dog?lock=102',
  'Вельш-корги пемброк': 'https://loremflickr.com/640/640/corgi,puppy,dog?lock=103',
  'Померанский шпиц': 'https://loremflickr.com/640/640/pomeranian,puppy,dog?lock=104',
  'Немецкая овчарка': 'https://loremflickr.com/640/640/german-shepherd,puppy,dog?lock=105',
  'Йоркширский терьер': 'https://loremflickr.com/640/640/yorkshire-terrier,puppy,dog?lock=106',
  'Золотистый ретривер': 'https://loremflickr.com/640/640/golden-retriever,puppy,dog?lock=107',
  'Бигль': 'https://loremflickr.com/640/640/beagle,puppy,dog?lock=108',
  'Такса': 'https://loremflickr.com/640/640/dachshund,puppy,dog?lock=109',
  'Мопс': 'https://loremflickr.com/640/640/pug,puppy,dog?lock=110',
  'Чихуахуа': 'https://loremflickr.com/640/640/chihuahua,puppy,dog?lock=111',
  'Джек-рассел-терьер': 'https://loremflickr.com/640/640/jack-russell-terrier,puppy,dog?lock=112',
  'Сиба-ину': 'https://loremflickr.com/640/640/shiba-inu,puppy,dog?lock=113',
  'Хаски': 'https://loremflickr.com/640/640/husky,puppy,dog?lock=114',
  'Акита-ину': 'https://loremflickr.com/640/640/akita,puppy,dog?lock=115',
  'Пудель': 'https://loremflickr.com/640/640/poodle,puppy,dog?lock=116',
  'Мальтипу': 'https://loremflickr.com/640/640/maltipoo,puppy,dog?lock=117',
  'Кавалер кинг чарльз спаниель': 'https://loremflickr.com/640/640/cavalier-king-charles-spaniel,puppy,dog?lock=118',
  'Доберман': 'https://loremflickr.com/640/640/doberman,puppy,dog?lock=119',
  'Ротвейлер': 'https://loremflickr.com/640/640/rottweiler,puppy,dog?lock=120',
  'Самоед': 'https://loremflickr.com/640/640/samoyed,puppy,dog?lock=121',
  'Бордер-колли': 'https://loremflickr.com/640/640/border-collie,puppy,dog?lock=122',
  'Кане-корсо': 'https://loremflickr.com/640/640/cane-corso,puppy,dog?lock=123',
  'Английский бульдог': 'https://loremflickr.com/640/640/english-bulldog,puppy,dog?lock=124',
  'Цвергшнауцер': 'https://loremflickr.com/640/640/miniature-schnauzer,puppy,dog?lock=125',
  'Бишон фризе': 'https://loremflickr.com/640/640/bichon-frise,puppy,dog?lock=126',
  'Ши-тцу': 'https://loremflickr.com/640/640/shih-tzu,puppy,dog?lock=127',
  'Американский булли': 'https://loremflickr.com/640/640/american-bully,puppy,dog?lock=128',
  'Русский той': 'https://loremflickr.com/640/640/russian-toy-terrier,puppy,dog?lock=129',
  'Бернский зенненхунд': 'https://loremflickr.com/640/640/bernese-mountain-dog,puppy,dog?lock=130',
};

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Красноярск', 'Самара', 'Уфа', 'Ростов-на-Дону', 'Краснодар', 'Омск', 'Воронеж', 'Пермь', 'Волгоград', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск', 'Барнаул', 'Ульяновск', 'Иркутск', 'Хабаровск', 'Ярославль', 'Владивосток', 'Махачкала', 'Томск', 'Оренбург', 'Кемерово', 'Новокузнецк', 'Рязань', 'Астрахань', 'Пенза', 'Сочи'
];
const statuses = ['Свободен', 'Бронь', 'Продан'];
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85';
const fallbackBreedImage = 'https://loremflickr.com/640/640/puppy,dog?lock=999';

const breedIcons = {
  'Лабрадор ретривер': '🐕',
  'Французский бульдог': '🥐',
  'Вельш-корги пемброк': '👑',
  'Померанский шпиц': '🦊',
  'Немецкая овчарка': '🛡️',
  'Йоркширский терьер': '🎀',
  'Золотистый ретривер': '☀️',
  'Бигль': '🧭',
  'Такса': '🌭',
  'Мопс': '😄',
  'Чихуахуа': '💎',
  'Джек-рассел-терьер': '⚡',
  'Сиба-ину': '🍂',
  'Хаски': '❄️',
  'Акита-ину': '⛩️',
  'Пудель': '✨',
  'Мальтипу': '🧸',
  'Кавалер кинг чарльз спаниель': '👒',
  'Доберман': '♟️',
  'Ротвейлер': '🏅',
  'Самоед': '☁️',
  'Бордер-колли': '🎯',
  'Кане-корсо': '🗿',
  'Английский бульдог': '🏛️',
  'Цвергшнауцер': '🎩',
  'Бишон фризе': '🫧',
  'Ши-тцу': '🌸',
  'Американский булли': '💪',
  'Русский той': '🔔',
  'Бернский зенненхунд': '⛰️',
};

const cityPool = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Краснодар', 'Сочи', 'Нижний Новгород', 'Самара', 'Ростов-на-Дону', 'Тюмень', 'Владивосток'];
const puppyNames = ['Луна', 'Марс', 'Бруно', 'Мия', 'Оскар', 'Тесса', 'Ричи', 'Белла', 'Арчи', 'Нора', 'Тайсон', 'Молли', 'Кай', 'Скай', 'Юки', 'Грей', 'Тедди', 'Лея', 'Рэй', 'Герда', 'Снежок', 'Флэш', 'Барни', 'Бонни', 'Макс', 'Лили', 'Чарли', 'Астра', 'Плюша', 'Берта'];
const kennelNames = ['Royal Gold Home', 'Sunny Puppy Club', 'Nord Star Kennel', 'Family Dog House', 'Happy Tail', 'Prime Puppies', 'Warm Nose Club', 'City Paws', 'Velvet Paw', 'Dream Breed', 'Smart Puppy', 'Kind Heart Kennel'];
const colorsByBreed = ['кремовый', 'палевый', 'рыже-белый', 'оранжевый соболь', 'чепрачный', 'сталь с подпалом', 'золотистый', 'триколор', 'мраморный', 'абрикосовый'];
const temperaments = ['ласковый и спокойный', 'контактный и семейный', 'активный и любознательный', 'уверенный и смелый', 'нежный и ручной', 'умный и обучаемый', 'весёлый и игривый', 'спокойный компаньон'];

function makePuppyFromBreed(breed, index) {
  const large = breed.size === 'Крупный';
  const small = breed.size === 'Маленький';
  const price = small ? 65000 + index * 2200 : large ? 78000 + index * 2600 : 70000 + index * 2400;
  const ageMonth = index % 4 === 0 ? '2 месяца' : index % 4 === 1 ? '2.5 месяца' : index % 4 === 2 ? '3 месяца' : '3.5 месяца';
  const weight = small ? `${(1.1 + (index % 6) * 0.4).toFixed(1)} кг` : large ? `${(5.8 + (index % 8) * 0.9).toFixed(1)} кг` : `${(2.8 + (index % 7) * 0.6).toFixed(1)} кг`;
  const height = small ? `${17 + (index % 8)} см` : large ? `${34 + (index % 10)} см` : `${24 + (index % 9)} см`;
  return {
    id: index + 1,
    name: puppyNames[index] || `Щенок ${index + 1}`,
    breed: breed.name,
    city: cityPool[index % cityPool.length],
    sex: index % 2 === 0 ? 'Сука' : 'Кобель',
    age: ageMonth,
    weight,
    height,
    color: colorsByBreed[index % colorsByBreed.length],
    temperament: temperaments[index % temperaments.length],
    documents: index % 3 === 0 ? 'РКФ, ветпаспорт, прививки' : index % 3 === 1 ? 'Щенячья метрика, ветпаспорт' : 'Ветпаспорт, чип, договор',
    kennel: kennelNames[index % kennelNames.length],
    price: `${price.toLocaleString('ru-RU')} ₽`,
    status: index % 9 === 4 ? 'Бронь' : index % 13 === 8 ? 'Продан' : 'Свободен',
    phone: `+7 999 ${String(100 + index).padStart(3, '0')}-${String(20 + index).padStart(2, '0')}-${String(30 + index).padStart(2, '0')}`,
    telegram: `@dreampet_${index + 1}`,
    image: breedImages[breed.name] || DEFAULT_IMAGE,
    moderationStatus: 'Опубликовано',
    ownerType: 'demo',
    createdAt: 'Демо-каталог',
    updatedAt: '',
  };
}


function parsePrice(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}

const initialPuppies = breedCatalog.map(makePuppyFromBreed);

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
          <a href="#cabinet">Мои объявления</a>
          <a href="#admin">Админ</a>
          <a href="#blog">Гиды</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" type="button" aria-label="Избранное"><Heart size={20} /></button>
          <a className="icon-btn" href="#cabinet" aria-label="Профиль"><UserRound size={20} /></a>
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
              <span className="breed-icon" aria-hidden="true">{breedIcons[breed.name] || '🐾'}</span>
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
          <div><h3>{puppy.name}</h3><p><span className="inline-breed-icon">{breedIcons[puppy.breed] || '🐾'}</span>{puppy.breed}</p></div>
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
      moderationStatus: 'На модерации',
      ownerType: 'user',
      createdAt: new Date().toLocaleString('ru-RU'),
      updatedAt: '',
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
        <button className="primary-btn form-submit" type="submit"><Send size={19} /> Отправить на модерацию</button>
      </form>
    </section>
  );
}



function ModerationBadge({ value }) {
  const className = value === 'Опубликовано' ? 'approved' : value === 'Отклонено' ? 'rejected' : 'pending';
  return <span className={`moderation-badge ${className}`}>{value || 'Опубликовано'}</span>;
}

function CompactAdCard({ puppy, onOpen, actions }) {
  return (
    <article className="account-ad-card">
      <img src={puppy.image || DEFAULT_IMAGE} alt={`${puppy.name}, ${puppy.breed}`} />
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
          <button className="outline-btn" type="button" onClick={() => onOpen(puppy)}>Открыть</button>
          {actions}
        </div>
      </div>
    </article>
  );
}

function MyAccount({ puppies, onUpdate, onDelete, onOpen }) {
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
      moderationStatus: 'На модерации',
      updatedAt: new Date().toLocaleString('ru-RU'),
    };
    delete updated.rawPrice;
    onUpdate(updated);
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
          <a className="primary-btn" href="#kennels">Разместить щенка</a>
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
              onOpen={onOpen}
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

function AdminPanel({ puppies, onUpdate, onDelete, onOpen }) {
  const [statusFilter, setStatusFilter] = useState('Все');
  const userAds = puppies.filter((puppy) => puppy.ownerType === 'user');
  const visibleAds = userAds.filter((puppy) => statusFilter === 'Все' || puppy.moderationStatus === statusFilter);

  function setModeration(puppy, moderationStatus) {
    onUpdate({ ...puppy, moderationStatus, updatedAt: new Date().toLocaleString('ru-RU') });
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
              onOpen={onOpen}
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


function GuidesSection() {
  const choiceGuides = [
    ['01', 'Выбор породы под образ жизни', 'Сравните размер, активность, опыт владельца и условия дома. Так вы не выбираете только по фото, а находите собаку, которая реально подходит семье.'],
    ['02', 'Проверка питомника', 'Запрашивайте документы родителей, ветпаспорт, договор, условия брони и актуальные фото щенка. В Dream Pet карточка уже подталкивает к прозрачности.'],
    ['03', 'Первый месяц дома', 'Подготовьте лежанку, миски, корм, безопасную зону, игрушки и план адаптации. Первые недели важнее любых аксессуаров.'],
  ];
  const careGuides = [
    [Stethoscope, 'Здоровье', 'Прививки по возрасту, обработка от паразитов, ветпаспорт и план первого визита к ветеринару.'],
    [Bone, 'Питание', 'Плавный переход на новый корм за 7–10 дней, контроль веса и понятный режим кормления.'],
    [Dumbbell, 'Активность', 'Короткие регулярные прогулки, игры на контакт и нагрузка по возрасту, а не “до усталости”.'],
    [BookOpen, 'Воспитание', 'Имя, место, туалет, мягкие правила дома и первые команды через похвалу и стабильный режим.'],
  ];

  return (
    <section className="guides-section" id="blog">
      <div className="section-head section-head--stacked">
        <div>
          <span className="eyebrow"><BookOpen size={15} /> Гиды Dream Pet</span>
          <h2>Полноценная платформа для выбора, покупки и адаптации щенка</h2>
        </div>
        <p>Мы не просто показываем объявления — помогаем будущему владельцу принять спокойное и осознанное решение.</p>
      </div>

      <div className="guide-layout">
        <article className="guide-feature">
          <span className="guide-feature__tag"><Star size={16} /> Рекомендуем начать здесь</span>
          <h3>Как выбрать щенка, если вы пока не знаете породу</h3>
          <p>Начните не с названия породы, а с быта: квартира или дом, дети, график прогулок, опыт и ожидания от характера. После этого фильтр Dream Pet покажет подходящие варианты.</p>
          <div className="guide-checks">
            <span><CheckCircle2 size={16} /> Подходит для новичков</span>
            <span><CheckCircle2 size={16} /> Учитывает семью и активность</span>
            <span><CheckCircle2 size={16} /> Помогает избежать импульсивной покупки</span>
          </div>
        </article>

        <div className="guide-cards">
          {choiceGuides.map(([number, title, text]) => (
            <article className="guide-card" key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="care-grid">
        {careGuides.map(([Icon, title, text]) => (
          <article className="care-card" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="platform-strip">
        <div><Users size={22} /><strong>280+ питомников</strong><span>единый стандарт карточек</span></div>
        <div><Clock3 size={22} /><strong>Быстрый контакт</strong><span>телефон и Telegram в карточке</span></div>
        <div><ClipboardCheck size={22} /><strong>Проверка данных</strong><span>документы, статус, актуальность</span></div>
      </div>
    </section>
  );
}

function App() {
  const [puppies, setPuppies] = useState(() => {
    const saved = localStorage.getItem('dream-pet-puppies-v8');
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

  const publicPuppies = useMemo(() => puppies.filter((puppy) => (puppy.moderationStatus || 'Опубликовано') === 'Опубликовано'), [puppies]);

  const filteredPuppies = useMemo(() => publicPuppies.filter((puppy) => {
    const maxPrice = parsePrice(filters.maxPrice);
    const puppyPrice = parsePrice(puppy.price);
    const hasHelper = filters.size || filters.activity || filters.family || filters.experience;
    const recommendedNames = new Set(recommendedBreeds.slice(0, 12).map((breed) => breed.name));
    return (!filters.breed || puppy.breed === filters.breed)
      && (!filters.city || puppy.city === filters.city)
      && (!filters.sex || puppy.sex === filters.sex)
      && (!maxPrice || puppyPrice <= maxPrice)
      && (filters.breed || !hasHelper || recommendedNames.has(puppy.breed));
  }), [publicPuppies, filters, recommendedBreeds]);

  function savePuppies(next) {
    setPuppies(next);
    localStorage.setItem('dream-pet-puppies-v8', JSON.stringify(next));
  }

  function addPuppy(puppy) {
    const next = [puppy, ...puppies];
    savePuppies(next);
    document.getElementById('cabinet')?.scrollIntoView({ behavior: 'smooth' });
  }

  function updatePuppy(updatedPuppy) {
    savePuppies(puppies.map((puppy) => puppy.id === updatedPuppy.id ? updatedPuppy : puppy));
  }

  function deletePuppy(id) {
    savePuppies(puppies.filter((puppy) => puppy.id !== id));
    if (selectedPuppy?.id === id) setSelectedPuppy(null);
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
        <MyAccount puppies={puppies} onUpdate={updatePuppy} onDelete={deletePuppy} onOpen={setSelectedPuppy} />
        <AdminPanel puppies={puppies} onUpdate={updatePuppy} onDelete={deletePuppy} onOpen={setSelectedPuppy} />
        <GuidesSection />
      </div>
      <PuppyModal puppy={selectedPuppy} onClose={() => setSelectedPuppy(null)} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
