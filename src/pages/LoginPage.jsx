import { LogIn, ShieldCheck, UserRound } from 'lucide-react';
import { roleOptions, roles } from '../data/roles.js';

export function LoginPage({ role, onRoleChange }) {
  return (
    <section className="auth-page page-shell routed-page">
      <div className="auth-card">
        <span className="eyebrow"><LogIn size={15} /> Вход в Dream Pet</span>
        <h1>Войти в аккаунт</h1>
        <p>Для MVP авторизация работает в демо-режиме: выберите роль, чтобы проверить защищённые маршруты кабинета питомника и админки.</p>

        <label className="auth-field">
          <span>Email</span>
          <input type="email" placeholder="kennel@example.com" />
        </label>
        <label className="auth-field">
          <span>Пароль</span>
          <input type="password" placeholder="••••••••" />
        </label>
        <label className="auth-field">
          <span>Демо-роль</span>
          <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
            {roleOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
          </select>
        </label>

        <a className="primary-btn" href={role === 'admin' ? '#/admin' : '#/account'}><UserRound size={18} /> Продолжить как {roles[role]?.label}</a>
        <a className="outline-btn" href="#/register">Создать аккаунт питомника</a>
      </div>
      <aside className="auth-note">
        <ShieldCheck size={28} />
        <h2>Что проверяет задача 1.7</h2>
        <p>Маршруты входа и регистрации доступны всем пользователям, а кабинет, размещение объявлений и админка закрываются по текущей роли.</p>
      </aside>
    </section>
  );
}
