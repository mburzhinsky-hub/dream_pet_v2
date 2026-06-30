import { Gift, Heart, Menu, UserRound, X } from 'lucide-react';
import { logoSrc } from '../data/catalog.js';
import { roleOptions, roles } from '../data/roles.js';

export function Header({ role, onRoleChange }) {
  return (
    <>
      <div className="top-ad">
        <div className="top-ad__inner">
          <span className="top-ad__gift"><Gift size={22} /></span>
          <div className="top-ad__copy">
            <strong>АКЦИЯ ДЛЯ НОВЫХ ВЛАДЕЛЬЦЕВ</strong>
            <span>Премиум-корм + консультация кинолога — скидка 15% при выборе щенка на Dream Pet</span>
          </div>
          <button type="button">Получить скидку</button>
          <X className="top-ad__close" size={18} />
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#/" aria-label="Dream Pet">
          <img src={logoSrc} alt="Dream Pet logo" />
          <span>
            <strong>Dream Pet</strong>
            <small>найди друга мечты</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Главная навигация">
          <a href="#/catalog">Каталог щенков</a>
          <a href="#/">Подобрать породу</a>
          <a href="#/kennels">Питомникам</a>
          <a href="#/account">Кабинет</a>
          <a href="#/admin">Админка</a>
          <a href="#/guides">Гиды</a>
          <a href="#/login">Вход</a>
        </nav>

        <div className="header-actions">
          <label className="role-switcher" title={roles[role]?.description}>
            <span>Роль</span>
            <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
              {roleOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </label>
          <button className="icon-btn" type="button" aria-label="Избранное"><Heart size={20} /></button>
          <a className="icon-btn" href="#/login" aria-label="Профиль"><UserRound size={20} /></a>
          <a className="primary-btn primary-btn--small" href="#/kennels">Разместить щенка</a>
          <button className="mobile-menu" type="button" aria-label="Меню"><Menu size={22} /></button>
        </div>
      </header>
    </>
  );
}
