import { useState } from 'react';
import { loadPuppies, persistPuppies } from '../services/puppyStorage.js';

export function usePuppies() {
  const [puppies, setPuppies] = useState(loadPuppies);

  function save(nextPuppies) {
    setPuppies(nextPuppies);
    persistPuppies(nextPuppies);
  }

  function addPuppy(puppy) {
    save([puppy, ...puppies]);
  }

  function updatePuppy(updatedPuppy) {
    save(puppies.map((puppy) => puppy.id === updatedPuppy.id ? updatedPuppy : puppy));
  }

  function deletePuppy(id) {
    save(puppies.filter((puppy) => puppy.id !== id));
  }

  function findPuppy(id) {
    return puppies.find((puppy) => String(puppy.id) === String(id));
  }

  return {
    puppies,
    addPuppy,
    updatePuppy,
    deletePuppy,
    findPuppy,
  };
}
