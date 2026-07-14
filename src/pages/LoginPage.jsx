import { LogIn, ShieldCheck, UserRound } from 'lucide-react';
import { Button, Input, Select } from '../components/ui/index.js';
import { roleOptions, roles } from '../data/roles.js';

export function LoginPage({ role, onRoleChange }) {
  const options = roleOptions.map((option) => ({ value: option.id, label: option.label }));

  return (
    <section className="auth-page page-shell routed-page">
      <div className="auth-card">
        <span className="eyebrow"><LogIn size={15} /> Вход в Dream Pet</span>
        <h1>Войти в аккаунт</h1>
        <p>Для MVP авторизация работает в демо-режиме: выберите роль, чтобы проверить защищённые маршруты кабинета питомника и админки.</p>

        <Input className="auth-field" label="Email" type="email" placeholder="kennel@example.com" autoComplete="email" />
        <Input className="auth-field" label="Пароль" type="password" placeholder="••••••••" autoComplete="current-password" />
        <Select className="auth-field" label="Демо-роль" value={role} options={options} onChange={(event) => onRoleChange(event.target.value)} />

        <Button as="a" href={role === 'admin' ? '#/admin' : '#/account'} fullWidth><UserRound size={18} /> Продолжить как {roles[role]?.label}</Button>
        <Button as="a" href="#/register" variant="secondary" fullWidth>Создать аккаунт питомника</Button>
      </div>
      <aside className="auth-note">
        <ShieldCheck size={28} />
        <h2>Что проверяет задача 1.9</h2>
        <p>Форма входа использует общие компоненты Button, Input и Select. Остальные компоненты доступны через единый экспорт components/ui.</p>
      </aside>
    </section>
  );
}
