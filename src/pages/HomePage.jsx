import { BreedsAndBenefits } from '../components/BreedsAndBenefits.jsx';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { Hero } from '../components/Hero.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function HomePage({ filters, setFilters, recommendedBreeds, puppies }) {
  const previewPuppies = puppies.slice(0, 6);

  return (
    <>
      <Hero />
      <div className="page-shell">
        <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />
        <BreedsAndBenefits />
        <section className="catalog catalog-preview" id="catalog-preview">
          <div className="section-head">
            <div>
              <span className="eyebrow">Витрина MVP</span>
              <h2>Первые щенки из каталога</h2>
            </div>
            <a href="#/catalog">Открыть полный каталог</a>
          </div>
          <div className="puppy-grid">
            {previewPuppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}
          </div>
        </section>
      </div>
    </>
  );
}
