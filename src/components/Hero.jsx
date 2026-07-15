import { CheckCircle2, PawPrint, Search, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { heroImage } from '../data/catalog.js';

export function Hero() {
  function scrollToHelper() {
    document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero-copy reveal">
          <div className="eyebrow"><ShieldCheck size={16} /> Маркетплейс проверенных щенков</div>
          <h1>Найдите щенка, <span>который подходит</span> именно вам</h1>
          <p>Проверенные питомники, понятные документы и поддержка на каждом этапе выбора.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#/catalog"><PawPrint size={19} /> Смотреть щенков</a>
            <button className="outline-btn" type="button" onClick={scrollToHelper}><Search size={19} /> Подобрать породу</button>
          </div>
          <div className="hero-proof" aria-label="Преимущества площадки">
            <span><CheckCircle2 size={16} /> Актуальные карточки</span>
            <span><CheckCircle2 size={16} /> Прямой контакт</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal--delay">
          <img className="hero-dog" src={heroImage} alt="Золотистый ретривер на светлой террасе" />
          <div className="trust-card trust-card--verify">
            <span className="trust-card__icon"><ShieldCheck size={23} /></span>
            <div><strong>280+ питомников</strong><small>единый стандарт карточек</small></div>
          </div>
          <div className="trust-card trust-card--rating">
            <span className="trust-card__icon"><Star size={22} fill="currentColor" /></span>
            <div><strong>98% довольных семей</strong><small>поддержка при выборе</small></div>
          </div>
          <span className="hero-spark hero-spark--one" aria-hidden="true"><Sparkles size={19} /></span>
        </div>
      </div>
    </section>
  );
}
