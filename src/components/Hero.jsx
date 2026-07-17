import { PawPrint, Search, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { heroImage } from '../data/catalog.js';

export function Hero() {
  function scrollToBreedHelper() {
    document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="hero-copy reveal">
        <div className="eyebrow"><ShieldCheck size={15} /> Маркетплейс проверенных щенков</div>
        <h1>Найдите щенка, <span>который подходит</span> именно вам</h1>
        <p>Проверенные питомники, здоровые щенки и поддержка на каждом этапе.</p>

        <div className="hero-actions">
          <a className="primary-btn hero-primary" href="#/catalog"><PawPrint size={19} /> Смотреть щенков</a>
          <button className="outline-btn hero-secondary" type="button" onClick={scrollToBreedHelper}><Search size={19} /> Подобрать породу</button>
        </div>
      </div>

      <div className="hero-trust" aria-label="Преимущества Dream Pet">
        <article className="trust-card trust-card--verify">
          <span className="trust-card__icon"><ShieldCheck size={24} /></span>
          <div><strong>Проверенные питомники</strong><small>Каждый питомник проходит нашу проверку</small></div>
        </article>
        <article className="trust-card trust-card--rating">
          <span className="trust-card__icon"><Star size={23} fill="currentColor" /></span>
          <div><strong>4,9 · 1 240 отзывов</strong><small>Реальные отзывы от владельцев</small></div>
        </article>
      </div>

      <span className="hero-spark hero-spark--one" aria-hidden="true"><Sparkles size={18} /></span>
      <span className="hero-spark hero-spark--two" aria-hidden="true"><Sparkles size={14} /></span>
    </section>
  );
}
