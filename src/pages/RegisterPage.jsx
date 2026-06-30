import { ClipboardCheck, PawPrint } from 'lucide-react';

export function RegisterPage({ onRoleChange }) {
  function becomeKennel() {
    onRoleChange('kennel');
  }

  return (
    <section className="auth-page page-shell routed-page">
      <div className="auth-card">
        <span className="eyebrow"><PawPrint size={15} /> Регистрация питомника</span>
        <h1>Создать аккаунт питомника</h1>
        <p>Форма фиксирует будущий сценарий регистрации заводчика. В MVP она переводит пользователя в роль питомника для проверки protected routes.</p>

        <label className="auth-field">
          <span>Название питомника</span>
          <input placeholder="Dream Kennel" />
        </label>
        <label className="auth-field">
          <span>Email</span>
          <input type="email" placeholder="kennel@example.com" />
        </label>
        <label className="auth-field">
          <span>Телефон</span>
          <input type="tel" placeholder="+7 999 000-00-00" />
        </label>

        <a className="primary-btn" href="#/account" onClick={becomeKennel}><ClipboardCheck size={18} /> Зарегистрироваться</a>
        <a className="outline-btn" href="#/login">Уже есть аккаунт</a>
      </div>
      <aside className="auth-note">
        <h2>После регистрации</h2>
        <p>Питомник попадает в личный кабинет, размещает щенка, а объявление уходит на модерацию администратору.</p>
      </aside>
    </section>
  );
}
