import { LogOut, Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { logoSrc } from '../data/catalog.js';

export function Header({ role, onRoleChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isKennel = role === 'kennel';
  const isAdmin = role === 'admin';
  const isAuthenticated = isKennel || isAdmin;

  function closeMenu() {
    setMenuOpen(false);
  }

  function goToHomeSection(event, sectionId) {
    event.preventDefault();
    setMenuOpen(false);
    window.location.hash = '/';
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  }

  function logout() {
    onRoleChange('visitor');
    setMenuOpen(false);
    window.location.hash = '/';
  }

  return (
    <div className="header-stage">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="Dream Pet — главная" onClick={closeMenu}>
          <img src={logoSrc} alt="Dream Pet" />
          <span>
            <strong>Dream Pet</strong>
            <small>найди друга мечты</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Главная навигация">
          <a href="#/catalog" onClick={closeMenu}>Каталог</a>
          <a href="#/" onClick={(event) => goToHomeSection(event, 'breed-helper')}>Подбор породы</a>
          <a href="#/" onClick={(event) => goToHomeSection(event, 'trust')}>Как мы проверяем</a>
          <a href="#/guides" onClick={closeMenu}>Гиды</a>
          {isKennel && <a className="mobile-only-link" href="#/account" onClick={closeMenu}>Кабинет питомника</a>}
          {isAdmin && <a className="mobile-only-link" href="#/admin" onClick={closeMenu}>Админка</a>}
          {!isAuthenticated && <a className="mobile-only-link" href="#/login" onClick={closeMenu}>Войти</a>}
        </nav>

        <div className="header-actions">
          {isAuthenticated ? (
            <>
              <a className="header-login" href={isAdmin ? '#/admin' : '#/account'}>
                <UserRound size={18} />
                {isAdmin ? 'Админка' : 'Кабинет'}
              </a>
              <button className="header-logout" type="button" onClick={logout} aria-label="Выйти" title="Выйти">
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <a className="header-login" href="#/login">Войти</a>
          )}

          <a className="primary-btn primary-btn--small" href={isKennel || isAdmin ? '#/kennels' : '#/login'}>
            Разместить щенка
          </a>

          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </div>
  );
}
