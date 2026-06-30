import { AlertTriangle } from 'lucide-react';

export function NotFoundPage({ path }) {
  return (
    <section className="page-shell routed-page">
      <div className="empty-state">
        <AlertTriangle size={36} />
        <h1>Страница не найдена</h1>
        <p>Маршрут {path} не входит в карту страниц Dream Pet MVP.</p>
        <div className="empty-actions">
          <a className="primary-btn" href="#/">На главную</a>
          <a className="outline-btn" href="#/catalog">В каталог</a>
        </div>
      </div>
    </section>
  );
}
