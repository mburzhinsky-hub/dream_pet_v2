import { BadgeCheck, ChevronRight, Heart, MessageCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { breedCatalog, breedIcons, breedImages, fallbackBreedImage } from '../data/catalog.js';

export function BreedsAndBenefits() {
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
          <a href="#/catalog">30 пород <ChevronRight size={16} /></a>
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
