import { useState } from 'react';

const ROLE_STORAGE_KEY = 'dream-pet-demo-role';

export function useRole() {
  const [role, setRoleState] = useState(() => localStorage.getItem(ROLE_STORAGE_KEY) || 'visitor');

  function setRole(nextRole) {
    setRoleState(nextRole);
    localStorage.setItem(ROLE_STORAGE_KEY, nextRole);
  }

  return { role, setRole };
}
