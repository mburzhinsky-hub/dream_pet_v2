export function parsePrice(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}
