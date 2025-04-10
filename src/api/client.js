import { BASE_URL } from './endpoints.js';

export async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();

    if (json.code !== 200) {
      throw new Error(json.message || 'API error');
    }

    return json.data;
  } catch (error) {
    console.error(`API error [${url}]:`, error.message);
    return null;
  }
}