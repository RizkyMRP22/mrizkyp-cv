import { apiFetch } from './client.js';
import { ENDPOINTS } from './endpoints.js';

export function fetchProfile() {
  return apiFetch(ENDPOINTS.PROFILE_DETAIL);
}