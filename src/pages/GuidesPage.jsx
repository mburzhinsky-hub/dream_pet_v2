import { BookOpen, CheckCircle2, ClipboardCheck, Clock3, Dumbbell, Star, Stethoscope, Users, Bone } from 'lucide-react';

export function GuidesPage() {
  const choiceGuides = [
    ['01', 'Выбор породы под образ жизни', 'Сравните размер, активность, опыт владельца и условия дома. Так вы не выбираете только по фото, а находите собаку, которая реально подходит семье.'],
    ['02', 'Проверка питомника', 'Запрашивайте документы родителей, ветпаспорт, договор, условия брони и актуальные фото щенка. В Dream Pet карточка уже подталкивает к прозрачности.'],
    ['03', 'Первый месяц дома', 'Подготовьте лежанку, миски, корм, безопасную зону, игрушки и план адаптации. Первые недели важнее любых аксессуаров.'],
  ];
  const careGuides = [
    [Stethoscope, 'Здоровье', 'Прививки по возрасту, обработка от паразитов, ветпаспорт и план первого визита к ветеринару.'],
    [Bone, 'Питание', 'Плавный переход на новый корм за 7–10 дней, контроль веса и понятный режим кормления.'],
    [Dumbbell, 'Активность', 'Короткие регулярные прогулки, игры на контакт и нагрузка по возрасту, а не “до усталости”.'],
    [BookOpen, 'Воспитание', 'Имя, место, туалет, мягкие правила дома и первые команды через похвалу и стабильный режим.'],
  ];

  return (
    <section className="guides-section" id="blog">
      <div className="section-head section-head--stacked">
        <div>
          <span className="eyebrow"><BookOpen size={15} /> Гиды Dream Pet</span>
          <h2>Полноценная платформа для выбора, покупки и адаптации щенка</h2>
        </div>
        <p>Мы не просто показываем объявления — помогаем будущему владельцу принять спокойное и осознанное решение.</p>
      </div>

      <div className="guide-layout">
        <article className="guide-feature">
          <span className="guide-feature__tag"><Star size={16} /> Рекомендуем начать здесь</span>
          <h3>Как выбрать щенка, если вы пока не знаете породу</h3>
          <p>Начните не с названия породы, а с быта: квартира или дом, дети, график прогулок, опыт и ожидания от характера. После этого фильтр Dream Pet покажет подходящие варианты.</p>
          <div className="guide-checks">
            <span><CheckCircle2 size={16} /> Подходит для новичков</span>
            <span><CheckCircle2 size={16} /> Учитывает семью и активность</span>
            <span><CheckCircle2 size={16} /> Помогает избежать импульсивной покупки</span>
          </div>
        </article>

        <div className="guide-cards">
          {choiceGuides.map(([number, title, text]) => (
            <article className="guide-card" key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="care-grid">
        {careGuides.map(([Icon, title, text]) => (
          <article className="care-card" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="platform-strip">
        <div><Users size={22} /><strong>280+ питомников</strong><span>единый стандарт карточек</span></div>
        <div><Clock3 size={22} /><strong>Быстрый контакт</strong><span>телефон и Telegram в карточке</span></div>
        <div><ClipboardCheck size={22} /><strong>Проверка данных</strong><span>документы, статус, актуальность</span></div>
      </div>
    </section>
  );
}
