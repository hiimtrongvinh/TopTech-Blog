// Helper to resolve asset URLs dynamically in development and production
export function getAssetUrl(path) {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}
