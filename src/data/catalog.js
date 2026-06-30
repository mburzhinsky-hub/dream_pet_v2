import { breedCatalog, breedImages, fallbackBreedImage, breedIcons } from './breeds.js';
import { cities } from './cities.js';
import { statuses } from './statuses.js';

export { breedCatalog, breedImages, fallbackBreedImage, breedIcons } from './breeds.js';
export { cities } from './cities.js';
export { statuses, puppyStatuses, moderationStatuses } from './statuses.js';
export { filterOptions } from './filters.js';

export const BASE = import.meta.env.BASE_URL;
export const logoSrc = `${BASE}logo.jpg`;

export const heroImage =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1600&q=85';

export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85';

const cityPool = cities.slice(0, 12);
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
    status: index % 9 === 4 ? statuses[1] : index % 13 === 8 ? statuses[2] : statuses[0],
    phone: `+7 999 ${String(100 + index).padStart(3, '0')}-${String(20 + index).padStart(2, '0')}-${String(30 + index).padStart(2, '0')}`,
    telegram: `@dreampet_${index + 1}`,
    image: breedImages[breed.name] || DEFAULT_IMAGE,
    moderationStatus: 'Опубликовано',
    ownerType: 'demo',
    createdAt: 'Демо-каталог',
    updatedAt: '',
  };
}

export const initialPuppies = breedCatalog.map(makePuppyFromBreed);
