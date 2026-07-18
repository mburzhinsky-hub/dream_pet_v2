import { useState } from 'react';
import { Heart, Menu, UserRound, X } from 'lucide-react';
import { logoSrc } from '../data/catalog.js';
import { roleOptions, roles } from '../data/roles.js';

export function Header({ role, onRoleChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openBreedHelper(event) {
    event.preventDefault();
    closeMenu();
    window.location.hash = '/';
    window.setTimeout(() => {
      const helper = document.getElementById('breed-helper');
      if (helper) helper.open = true;
      helper?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  }

  return (
    <div className="header-stage">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="Dream Pet" onClick={closeMenu}>
          <img src={logoSrc} alt="Dream Pet logo" />
          <span>
            <strong>Dream Pet</strong>
            <small>найди друга мечты</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Главная навигация">
          <a href="#/catalog" onClick={closeMenu}>Каталог</a>
          <a href="#/" onClick={openBreedHelper}>Подбор породы</a>
          <a href="#/guides" onClick={closeMenu}>Как мы проверяем</a>
          <a href="#/guides" onClick={closeMenu}>Гиды</a>
          <a href="#/account" onClick={closeMenu}>Кабинет</a>
          <a href="#/admin" onClick={closeMenu}>Админка</a>
        </nav>

        <div className="header-actions">
          <label className="role-switcher" title={roles[role]?.description}>
            <span>Роль</span>
            <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
              {roleOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </label>
          <button className="icon-btn" type="button" aria-label="Избранное"><Heart size={18} /></button>
          <a className="icon-btn" href="#/login" aria-label="Войти"><UserRound size={18} /></a>
          <a className="primary-btn primary-btn--small" href="#/kennels">Разместить щенка</a>
          <button className="mobile-menu" type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
    </div>
  );
}
