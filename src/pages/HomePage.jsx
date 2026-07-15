import { MapPin } from 'lucide-react';
import { BreedsAndBenefits } from '../components/BreedsAndBenefits.jsx';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { Hero } from '../components/Hero.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function HomePage({ filters, setFilters, recommendedBreeds, puppies }) {
  const previewPuppies = puppies.slice(0, 6);

  return (
    <>
      <Hero />
      <div className="page-shell home-shell">
        <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />
        <section className="catalog catalog-preview" id="catalog">
          <div className="section-head">
            <div>
              <span className="section-kicker"><MapPin size={15} /> Подборки для вас</span>
              <h2>Щенки рядом с вами</h2>
            </div>
            <a href="#/catalog">Смотреть весь каталог</a>
          </div>
          {previewPuppies.length === 0 ? (
            <div className="empty-state"><h3>По фильтрам ничего не найдено</h3><p>Измените параметры поиска или воспользуйтесь подбором породы.</p></div>
          ) : (
            <div className="puppy-grid">{previewPuppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}</div>
          )}
        </section>
        <BreedsAndBenefits />
      </div>
    </>
  );
}
