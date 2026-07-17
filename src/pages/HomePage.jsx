import { Headphones, HeartPulse, MessageSquareText, ShieldCheck } from 'lucide-react';
import { BreedsAndBenefits } from '../components/BreedsAndBenefits.jsx';
import { FilterPanel } from '../components/FilterPanel.jsx';
import { Hero } from '../components/Hero.jsx';
import { PuppyCard } from '../components/PuppyCard.jsx';

export function HomePage({ filters, setFilters, recommendedBreeds, puppies }) {
  const previewPuppies = puppies.slice(0, 3);

  return (
    <>
      <Hero />
      <div className="page-shell home-shell">
        <FilterPanel filters={filters} setFilters={setFilters} recommendedBreeds={recommendedBreeds} />

        <section className="catalog catalog-preview" id="catalog-preview">
          <div className="section-head">
            <div>
              <span className="section-kicker"><span /> Подборки для вас</span>
              <h2>Щенки рядом с вами</h2>
            </div>
            <a href="#/catalog">Смотреть все <span aria-hidden="true">›</span></a>
          </div>
          <div className="puppy-grid puppy-grid--preview">
            {previewPuppies.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)}
          </div>
        </section>

        <section className="trust-strip" id="trust" aria-label="Гарантии Dream Pet">
          <article><ShieldCheck size={25} /><div><strong>Проверка питомников</strong><span>Личная проверка и документы</span></div></article>
          <article><HeartPulse size={25} /><div><strong>Здоровые щенки</strong><span>Вакцинация и ветконтроль</span></div></article>
          <article><MessageSquareText size={25} /><div><strong>Поддержка 24/7</strong><span>Поможем на каждом этапе</span></div></article>
          <article><Headphones size={25} /><div><strong>Безопасная сделка</strong><span>Безопасно и прозрачно</span></div></article>
        </section>

        <BreedsAndBenefits />
      </div>
    </>
  );
}
