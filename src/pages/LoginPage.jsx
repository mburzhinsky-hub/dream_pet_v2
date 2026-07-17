import { Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const ADMIN_EMAIL = 'admin@dream-pet.ru';
const ADMIN_PASSWORD_SHA256 = 'c111d0de95a6d672e439905acdecbead3de798f103975094cb789fe85954c46c';

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function LoginPage({ onRoleChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || password.length < 4) {
      setError('Введите корректный email и пароль не короче 4 символов.');
      return;
    }

    setLoading(true);
    try {
      // MVP only: production access must move to Supabase Auth/RLS or a server-side check.
      if (normalizedEmail === ADMIN_EMAIL) {
        const digest = await sha256(password);
        if (digest !== ADMIN_PASSWORD_SHA256) {
          setError('Неверный логин или пароль.');
          return;
        }
        onRoleChange('admin');
        window.location.hash = '/admin';
        return;
      }

      onRoleChange('kennel');
      window.location.hash = '/account';
    } catch {
      setError('Не удалось выполнить вход. Обновите страницу и попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-page page-shell routed-page">
      <div className="auth-card auth-card--redesign">
        <span className="eyebrow"><LogIn size={15} /> Вход в Dream Pet</span>
        <h1>Добро пожаловать</h1>
        <p>Войдите в кабинет питомника. Административный доступ определяется автоматически по служебным данным входа и не показывается в интерфейсе.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-control">
            <span>Email</span>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" />
          </label>

          <label className="auth-control">
            <span>Пароль</span>
            <span className="password-control">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Введите пароль" autoComplete="current-password" />
              <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button className="primary-btn auth-submit" type="submit" disabled={loading}>
            {loading ? 'Проверяем…' : 'Войти'}
          </button>
        </form>

        <a className="auth-register-link" href="#/register">Создать аккаунт питомника</a>
      </div>

      <aside className="auth-note auth-note--redesign">
        <ShieldCheck size={30} />
        <h2>Доступ к админке скрыт</h2>
        <p>В навигации нет отдельной кнопки администратора. После корректного служебного входа система автоматически откроет раздел модерации.</p>
      </aside>
    </section>
  );
}
