import { Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { heroImage } from '../data/catalog.js';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <div className="eyebrow"><Sparkles size={16} /> Маркетплейс проверенных помётов</div>
        <h1>Найдите щенка, <span>который подходит именно вам</span></h1>
        <p>Проверенные питомники, здоровые щенки и полная поддержка на каждом этапе — от первого просмотра карточки до переезда домой.</p>

        <div className="hero-stats" aria-label="Статистика Dream Pet">
          <div><strong>2 500+</strong><span>щенков</span></div>
          <div><strong>280+</strong><span>питомников</span></div>
          <div><strong>56</strong><span>городов</span></div>
          <div><strong>98%</strong><span>довольных клиентов</span></div>
        </div>
      </div>

      <div className="hero-visual reveal reveal--delay">
        <div className="hero-glow" />
        <img className="hero-dog" src={heroImage} alt="Счастливый щенок Dream Pet" />
        <div className="trust-card trust-card--families">
          <div className="avatar-stack"><span /><span /><span /></div>
          <div><strong>Более 10 000 семей</strong><small>уже нашли своего друга</small></div>
          <Heart size={18} fill="currentColor" />
        </div>
        <div className="trust-card trust-card--verify">
          <ShieldCheck size={22} />
          <div><strong>Проверенные заводчики</strong><small>документы и актуальные карточки</small></div>
        </div>
      </div>
    </section>
  );
}
