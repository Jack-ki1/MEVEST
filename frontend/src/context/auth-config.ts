// Auth configuration constants - separated to avoid ESLint react-refresh warnings

export const ADMIN_ID = '00000000-0000-0000-0000-admin00000001';
export const ADMIN_STORAGE_KEY = 'mevest_admin_session';

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.trim().toLowerCase() ?? '';
const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined) ?? '';

export const isAdminBypassEnabled = (() => {
  if (import.meta.env.VITE_DISABLE_ADMIN_BYPASS === 'true') return false;
  return Boolean(ADMIN_EMAIL && ADMIN_PASSWORD);
})();

if (isAdminBypassEnabled && import.meta.env.PROD) {
  console.warn('[Auth] Admin bypass is ENABLED in a production build — ensure credentials are not public and disable via VITE_DISABLE_ADMIN_BYPASS=true if not needed.');
}

export const ADMIN_CREDENTIALS = { email: ADMIN_EMAIL, enabled: isAdminBypassEnabled };
