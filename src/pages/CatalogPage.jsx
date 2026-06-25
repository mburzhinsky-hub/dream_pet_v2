import { Sparkles } from 'lucide-react';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function CatalogPage({ filters, setFilters, recommendedBreeds, puppies }) {
  return (
    <div className="page-shell routed-page">
      <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />
      <section className="catalog" id="catalog">
        <div className="section-head">
          <div>
            <span className="eyebrow"><Sparkles size={15} /> Подобрано для вас</span>
            <h2>Каталог щенков</h2>
          </div>
          <p>{puppies.length} карточек</p>
        </div>
        {puppies.length === 0 ? (
          <div className="empty-state">
            <h3>По фильтрам ничего не найдено</h3>
            <p>Сбросьте часть параметров или попробуйте подобрать породу через помощник.</p>
          </div>
        ) : (
          <div className="puppy-grid">
            {puppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}
          </div>
        )}
      </section>
    </div>
  );
}
