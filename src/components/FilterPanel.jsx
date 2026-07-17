import { Baby, ChevronDown, Dumbbell, Heart, Home, Info, ListChecks, MapPin, PawPrint, Search, Sparkles, WalletCards } from 'lucide-react';
import { breedCatalog, getBreedByName } from '../data/breeds.js';
import { cities } from '../data/cities.js';
import { filterOptions } from '../data/filters.js';

export function FilterPanel({ filters, setFilters, recommendedBreeds }) {
  const selectedBreedInfo = getBreedByName(filters.breed);

  function update(key, value) {
    setFilters({ ...filters, [key]: value });
  }

  function openCatalog() {
    window.location.hash = '/catalog';
  }

  return (
    <section className="search-panel" aria-label="Поиск щенка">
      <div className="search-panel__main">
        <div className="filter-field">
          <PawPrint size={21} />
          <label>
            <span>Порода</span>
            <select value={filters.breed} onChange={(event) => update('breed', event.target.value)}>
              <option value="">Выберите породу</option>
              {breedCatalog.map((breed) => <option key={breed.id} value={breed.name}>{breed.name}</option>)}
            </select>
          </label>
          <ChevronDown size={17} />
        </div>

        <div className="filter-field">
          <MapPin size={21} />
          <label>
            <span>Город</span>
            <select value={filters.city} onChange={(event) => update('city', event.target.value)}>
              <option value="">Выберите город</option>
              {cities.map((city) => <option key={city} value={city}>{city}</option>)}
            </select>
          </label>
          <ChevronDown size={17} />
        </div>

        <div className="filter-field">
          <Heart size={21} />
          <label>
            <span>Пол</span>
            <select value={filters.sex} onChange={(event) => update('sex', event.target.value)}>
              <option value="">Любой</option>
              {filterOptions.sex.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <ChevronDown size={17} />
        </div>

        <div className="filter-field">
          <WalletCards size={21} />
          <label>
            <span>Цена</span>
            <input value={filters.maxPrice} onChange={(event) => update('maxPrice', event.target.value)} placeholder="Любая" inputMode="numeric" />
          </label>
        </div>

        <button className="primary-btn search-btn" type="button" onClick={openCatalog}><Search size={19} /> Найти щенка</button>
      </div>

      {selectedBreedInfo && (
        <article className="selected-breed-info" aria-live="polite">
          <div className="selected-breed-info__head">
            <span><Info size={16} /> Коротко о породе</span>
            <strong>{selectedBreedInfo.name}</strong>
          </div>
          <p>{selectedBreedInfo.description}</p>
          <div className="selected-breed-info__facts">
            <span>Размер: {selectedBreedInfo.size}</span>
            <span>Активность: {selectedBreedInfo.activity}</span>
            <span>Уход: {selectedBreedInfo.care}</span>
          </div>
        </article>
      )}

      <details className="breed-helper" id="breed-helper">
        <summary>
          <span><Sparkles size={17} /> Не знаете, какую породу выбрать?</span>
          <strong>Подобрать по образу жизни</strong>
        </summary>
        <div className="breed-helper__content">
          <label>
            <span><Home size={16} /> Где будет жить?</span>
            <select value={filters.size} onChange={(event) => update('size', event.target.value)}>
              <option value="">Не важно</option>
              {filterOptions.size.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label>
            <span><Dumbbell size={16} /> Активность</span>
            <select value={filters.activity} onChange={(event) => update('activity', event.target.value)}>
              <option value="">Не важно</option>
              {filterOptions.activity.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label>
            <span><Baby size={16} /> Семья</span>
            <select value={filters.family} onChange={(event) => update('family', event.target.value)}>
              <option value="">Не важно</option>
              {filterOptions.family.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label>
            <span><ListChecks size={16} /> Опыт</span>
            <select value={filters.experience} onChange={(event) => update('experience', event.target.value)}>
              <option value="">Не важно</option>
              {filterOptions.experience.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <div className="helper-result">
            <span>Подходящие породы:</span>
            {recommendedBreeds.slice(0, 5).map((breed) => (
              <button type="button" key={breed.id} onClick={() => update('breed', breed.name)}>{breed.short}</button>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
