import { useMemo, useState } from 'react';
import { breedCatalog } from '../data/breeds.js';
import { parsePrice } from '../utils/price.js';

export const defaultFilters = {
  breed: '',
  city: '',
  sex: '',
  maxPrice: '',
  size: '',
  activity: '',
  family: '',
  experience: '',
};

export function usePuppyFilters(puppies) {
  const [filters, setFilters] = useState(defaultFilters);

  const recommendedBreeds = useMemo(() => {
    const scored = breedCatalog.map((breed) => {
      let score = 0;
      if (!filters.size || breed.size === filters.size) score += 1;
      if (!filters.activity || breed.activity === filters.activity) score += 1;
      if (!filters.family || breed.family === filters.family) score += 1;
      if (!filters.experience || breed.experience === filters.experience) score += 1;
      return { ...breed, score };
    });

    return scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  }, [filters.size, filters.activity, filters.family, filters.experience]);

  const publicPuppies = useMemo(
    () => puppies.filter((puppy) => (puppy.moderationStatus || 'Опубликовано') === 'Опубликовано'),
    [puppies],
  );

  const filteredPuppies = useMemo(() => publicPuppies.filter((puppy) => {
    const maxPrice = parsePrice(filters.maxPrice);
    const puppyPrice = parsePrice(puppy.price);
    const hasHelper = filters.size || filters.activity || filters.family || filters.experience;
    const recommendedNames = new Set(recommendedBreeds.slice(0, 12).map((breed) => breed.name));

    return (!filters.breed || puppy.breed === filters.breed)
      && (!filters.city || puppy.city === filters.city)
      && (!filters.sex || puppy.sex === filters.sex)
      && (!maxPrice || puppyPrice <= maxPrice)
      && (filters.breed || !hasHelper || recommendedNames.has(puppy.breed));
  }), [publicPuppies, filters, recommendedBreeds]);

  return {
    filters,
    setFilters,
    recommendedBreeds,
    publicPuppies,
    filteredPuppies,
  };
}
