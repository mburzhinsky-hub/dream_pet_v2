import { ShieldAlert } from 'lucide-react';
import { roles } from '../data/roles.js';

export function AccessGate({ role, allowedRoles, children }) {
  if (allowedRoles.includes(role)) return children;

  const availableRoles = allowedRoles.map((allowedRole) => roles[allowedRole]?.label).filter(Boolean).join(', ');

  return (
    <section className="access-gate page-shell">
      <div className="empty-state empty-state--admin">
        <ShieldAlert size={36} />
        <h2>Раздел закрыт для текущей роли</h2>
        <p>Текущая роль: {roles[role]?.label}. Доступ разрешён для ролей: {availableRoles}.</p>
        <a className="primary-btn" href="#/">Вернуться на главную</a>
      </div>
    </section>
  );
}
