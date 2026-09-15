import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export interface Business {
  id: string;
  category: string;
  category_label: string;
  name: string;
  slug: string;
  tagline: string | null;
  description: string;
  phone: string | null;
  email: string | null;
  website: string | null;
  address: string | null;
  service_area: string | null;
  hours: string | null;
  rating: number;
  review_count: number;
  features: string[];
  image_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
}
