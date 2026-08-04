export const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
export const canonicalOrigin = 'https://smooth-tools.com';

export function withBase(path = '') {
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${baseUrl}${cleanPath}` : baseUrl;
}

export function toCanonical(path = '/') {
  return new URL(path, canonicalOrigin).toString();
}
