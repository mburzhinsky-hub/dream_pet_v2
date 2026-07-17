import { ShieldAlert } from 'lucide-react';

export function AccessGate({ role, allowedRoles, children }) {
  if (allowedRoles.includes(role)) return children;

  return (
    <section className="access-gate page-shell">
      <div className="empty-state empty-state--admin">
        <ShieldAlert size={36} />
        <h2>Нужен вход в аккаунт</h2>
        <p>Этот раздел доступен только авторизованным пользователям с подходящими правами.</p>
        <a className="primary-btn" href="#/login">Войти</a>
      </div>
    </section>
  );
}
