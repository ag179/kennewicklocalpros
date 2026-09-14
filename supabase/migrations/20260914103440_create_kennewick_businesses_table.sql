/*
# Create kennewick businesses table

1. New Tables
- `kennewick` — stores local business listings for the Kennewick Local Pros directory.
  - `id` (uuid, primary key, auto-generated)
  - `category` (text, not null) — service category slug, e.g. 'catering', 'pestcontrol', 'housecleaning'
  - `category_label` (text, not null) — human-readable category name, e.g. 'Catering', 'Pest Control'
  - `name` (text, not null) — business name
  - `slug` (text, not null, unique) — URL-safe identifier for the business detail page
  - `tagline` (text) — short one-line description shown on the card
  - `description` (text, not null) — full business description shown on the detail page
  - `phone` (text) — contact phone number
  - `email` (text) — contact email
  - `website` (text) — external business website URL
  - `address` (text) — street address
  - `service_area` (text) — areas served beyond Kennewick
  - `hours` (text) — business hours summary
  - `rating` (numeric, default 0) — average rating 0-5
  - `review_count` (integer, default 0) — number of reviews
  - `features` (text[]) — array of highlighted features/tags
  - `image_url` (text) — optional image URL for the card
  - `featured` (boolean, default false) — whether to highlight this business
  - `sort_order` (integer, default 0) — manual ordering within a category
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `kennewick`.
- This is a no-auth public directory app, so all data is intentionally public.
- Allow anon + authenticated SELECT (read-only for the frontend).
- No INSERT/UPDATE/DELETE policies for anon — data is managed server-side.

3. Indexes
- Index on `category` for fast category queries.
- Index on `slug` (already unique) for fast detail-page lookups.
*/

CREATE TABLE IF NOT EXISTS kennewick (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  category_label text NOT NULL,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  tagline text,
  description text NOT NULL,
  phone text,
  email text,
  website text,
  address text,
  service_area text,
  hours text,
  rating numeric(2,1) DEFAULT 0,
  review_count integer DEFAULT 0,
  features text[] DEFAULT '{}',
  image_url text,
  featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_kennewick_category ON kennewick(category);

ALTER TABLE kennewick ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_kennewick" ON kennewick;
CREATE POLICY "anon_select_kennewick" ON kennewick FOR SELECT
  TO anon, authenticated USING (true);