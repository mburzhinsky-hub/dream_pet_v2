import { Sparkles } from 'lucide-react';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function CatalogPage({ filters, setFilters, recommendedBreeds, puppies }) {
  return (
    <div className="page-shell routed-page catalog-page">
      <header className="page-heading">
        <span className="eyebrow"><Sparkles size={15} /> Проверенные объявления</span>
        <h1>Каталог щенков</h1>
        <p>Используйте фильтры, чтобы быстро найти породу, город, пол и подходящую стоимость.</p>
      </header>
      <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />
      <section className="catalog" id="catalog">
        <div className="section-head">
          <div><span className="section-kicker">Результаты поиска</span><h2>Доступные щенки</h2></div>
          <p className="catalog-count">{puppies.length} карточек</p>
        </div>
        {puppies.length === 0 ? (
          <div className="empty-state"><h3>По фильтрам ничего не найдено</h3><p>Сбросьте часть параметров или попробуйте подобрать породу через помощник.</p></div>
        ) : (
          <div className="puppy-grid">{puppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}</div>
        )}
      </section>
    </div>
  );
}
