import { useState } from 'react';
import { ChevronDown, Gift, Heart, Menu, PawPrint, UserRound, X } from 'lucide-react';
import { roleOptions, roles } from '../data/roles.js';

export function Header({ role, onRoleChange }) {
  const [promoOpen, setPromoOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {promoOpen && (
        <aside className="promo-bar" aria-label="Специальное предложение">
          <div className="promo-bar__inner">
            <span className="promo-bar__icon" aria-hidden="true"><Gift size={17} /></span>
            <p><strong>Подарок новым владельцам:</strong> консультация по адаптации щенка после выбора.</p>
            <a href="#/guides">Подробнее</a>
            <button type="button" onClick={() => setPromoOpen(false)} aria-label="Закрыть предложение"><X size={17} /></button>
          </div>
        </aside>
      )}

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#/" aria-label="Dream Pet — главная">
            <span className="brand__mark" aria-hidden="true"><PawPrint size={25} /></span>
            <span className="brand__copy"><strong>Dream Pet</strong><small>найди друга мечты</small></span>
          </a>

          <nav className="main-nav" aria-label="Главная навигация">
            <a href="#/catalog">Каталог</a>
            <a href="#/" onClick={() => setTimeout(() => document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)}>Подбор породы</a>
            <a href="#/guides">Как мы проверяем</a>
            <a href="#/guides">Гиды</a>
          </nav>

          <div className="header-actions">
            <button className="header-icon-button" type="button" aria-label="Избранное"><Heart size={19} /></button>
            <a className="header-login" href="#/login"><UserRound size={18} /> Войти</a>
            <details className="service-menu">
              <summary aria-label="Открыть меню профиля"><span>{roles[role]?.label}</span><ChevronDown size={16} /></summary>
              <div className="service-menu__panel">
                <label className="role-switcher" title={roles[role]?.description}>
                  <span>Демо-роль</span>
                  <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
                    {roleOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                  </select>
                </label>
                <a href="#/account">Личный кабинет</a>
                <a href="#/kennels">Разместить объявление</a>
                <a href="#/admin">Админка</a>
              </div>
            </details>
            <a className="primary-btn primary-btn--small header-cta" href="#/kennels"><PawPrint size={17} /> Разместить щенка</a>
            <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((current) => !current)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation">
          <nav aria-label="Мобильная навигация">
            <a href="#/catalog" onClick={closeMobileMenu}>Каталог</a>
            <a href="#/" onClick={() => { closeMobileMenu(); setTimeout(() => document.getElementById('breed-helper')?.scrollIntoView({ behavior: 'smooth' }), 0); }}>Подбор породы</a>
            <a href="#/guides" onClick={closeMobileMenu}>Как мы проверяем</a>
            <a href="#/guides" onClick={closeMobileMenu}>Гиды</a>
            <a href="#/login" onClick={closeMobileMenu}>Вход и регистрация</a>
            <a href="#/account" onClick={closeMobileMenu}>Личный кабинет</a>
            <a href="#/admin" onClick={closeMobileMenu}>Админка</a>
          </nav>
          <label className="role-switcher role-switcher--mobile" title={roles[role]?.description}>
            <span>Демо-роль</span>
            <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
              {roleOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </label>
          <a className="primary-btn" href="#/kennels" onClick={closeMobileMenu}>Разместить щенка</a>
        </div>
      </header>
    </>
  );
}
