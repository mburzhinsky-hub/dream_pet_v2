export const filterOptions = {
  sex: [
    { id: 'female', label: 'Сука', value: 'Сука' },
    { id: 'male', label: 'Кобель', value: 'Кобель' },
  ],
  size: [
    { id: 'small', label: 'Квартира / небольшой размер', value: 'Маленький' },
    { id: 'medium', label: 'Квартира или дом', value: 'Средний' },
    { id: 'large', label: 'Дом / нужен крупный пёс', value: 'Крупный' },
  ],
  activity: [
    { id: 'low', label: 'Спокойный компаньон', value: 'Низкая' },
    { id: 'medium', label: 'Прогулки каждый день', value: 'Средняя' },
    { id: 'high', label: 'Спорт, поездки, активная жизнь', value: 'Высокая' },
  ],
  family: [
    { id: 'with-children', label: 'Есть дети', value: 'С детьми' },
    { id: 'adults', label: 'Взрослая семья', value: 'Взрослым' },
    { id: 'active-owner', label: 'Активный владелец', value: 'Активным' },
  ],
  experience: [
    { id: 'beginner', label: 'Первая собака', value: 'Новичок' },
    { id: 'experienced', label: 'Есть опыт', value: 'Опытный' },
  ],
  priceRanges: [
    { id: 'under-50000', label: 'До 50 000 ₽', min: 0, max: 50000 },
    { id: '50000-100000', label: '50 000–100 000 ₽', min: 50000, max: 100000 },
    { id: 'over-100000', label: 'От 100 000 ₽', min: 100000, max: null },
  ],
};
