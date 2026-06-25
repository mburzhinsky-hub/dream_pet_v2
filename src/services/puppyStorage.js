import { initialPuppies } from '../data/catalog.js';

export const PUPPY_STORAGE_KEY = 'dream-pet-puppies-v9';

export function loadPuppies() {
  try {
    const saved = localStorage.getItem(PUPPY_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialPuppies;
  } catch (error) {
    console.warn('Не удалось прочитать объявления из localStorage', error);
    return initialPuppies;
  }
}

export function persistPuppies(puppies) {
  localStorage.setItem(PUPPY_STORAGE_KEY, JSON.stringify(puppies));
}
