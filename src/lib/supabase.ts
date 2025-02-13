import { createClient } from '@supabase/supabase-js';

const validateUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidConfig = validateUrl(supabaseUrl) && typeof supabaseAnonKey === 'string';

// Create a dummy client if environment variables are missing or invalid
export const supabase = isValidConfig
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : {
      from: () => ({
        insert: async () => ({ error: new Error('Supabase not configured') }),
        select: async () => ({ error: new Error('Supabase not configured') }),
        update: async () => ({ error: new Error('Supabase not configured') }),
        delete: async () => ({ error: new Error('Supabase not configured') })
      }),
      auth: {
        signUp: async () => ({ error: new Error('Supabase not configured') }),
        signIn: async () => ({ error: new Error('Supabase not configured') }),
        signOut: async () => ({ error: new Error('Supabase not configured') })
      }
    };

// Export a helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => isValidConfig;

// Log configuration status (only in development)
if (import.meta.env.DEV) {
  if (!supabaseUrl) {
    console.warn('Supabase URL is missing');
  } else if (!validateUrl(supabaseUrl)) {
    console.warn('Supabase URL is invalid');
  }
  if (!supabaseAnonKey) {
    console.warn('Supabase Anon Key is missing');
  }
}