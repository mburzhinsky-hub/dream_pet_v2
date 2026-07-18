import { PawPrint, Search, ShieldCheck, Star } from 'lucide-react';
import { heroImage } from '../data/catalog.js';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="hero-copy reveal">
        <div className="eyebrow"><ShieldCheck size={15} /> Маркетплейс проверенных щенков</div>
        <h1>Найдите щенка, <span>который подходит именно вам</span></h1>
        <p>Проверенные питомники, понятные документы и поддержка на каждом этапе выбора.</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#/catalog"><PawPrint size={18} /> Смотреть щенков</a>
          <a className="outline-btn" href="#/#breed-helper"><Search size={18} /> Подобрать породу</a>
        </div>
      </div>

      <div className="hero-trust reveal reveal--delay" aria-label="Преимущества Dream Pet">
        <div className="trust-card">
          <ShieldCheck size={22} />
          <div><strong>Проверенные питомники</strong><small>Документы и данные проходят модерацию</small></div>
        </div>
        <div className="trust-card">
          <Star size={22} />
          <div><strong>Честные карточки щенков</strong><small>Возраст, цена и контакты без скрытых условий</small></div>
        </div>
      </div>
    </section>
  );
}
