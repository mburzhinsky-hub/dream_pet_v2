import { BadgeCheck, Headphones, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BreedsAndBenefits } from '../components/BreedsAndBenefits.jsx';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { Hero } from '../components/Hero.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function HomePage({ filters, setFilters, recommendedBreeds, puppies }) {
  const previewPuppies = puppies.slice(0, 3);
  const trustItems = [
    [ShieldCheck, 'Проверка питомников', 'Документы и данные проходят модерацию'],
    [BadgeCheck, 'Здоровые щенки', 'Ветпаспорт и понятная информация'],
    [Headphones, 'Поддержка', 'Поможем разобраться на каждом этапе'],
    [HeartHandshake, 'Безопасный выбор', 'Прямой контакт с питомником'],
  ];

  return (
    <>
      <Hero />
      <div className="page-shell home-shell">
        <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />

        <section className="catalog catalog-preview" id="catalog-preview">
          <div className="section-head">
            <div>
              <span className="section-kicker">Подборки для вас</span>
              <h2>Щенки рядом с вами</h2>
            </div>
            <a href="#/catalog">Смотреть все</a>
          </div>
          <div className="puppy-grid">
            {previewPuppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}
          </div>
        </section>

        <section className="trust-strip" aria-label="Преимущества Dream Pet">
          {trustItems.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={23} />
              <div><strong>{title}</strong><span>{text}</span></div>
            </article>
          ))}
        </section>

        <BreedsAndBenefits />
      </div>
    </>
  );
}
