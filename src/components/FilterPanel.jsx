import { Baby, ChevronDown, Dumbbell, Heart, Home, ListChecks, MapPin, PawPrint, Search, SlidersHorizontal, Sparkles, WalletCards } from 'lucide-react';
import { breedCatalog, cities } from '../data/catalog.js';

export function FilterPanel({ filters, setFilters, recommendedBreeds }) {
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
