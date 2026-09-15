import { useEffect, useState } from 'react';
import { supabase, type Business } from '../lib/supabase-client';

interface Props {
  slug: string;
  domain: string;
  city: string;
}

export default function BusinessDetail({ slug, domain, city }: Props) {
  const [business, setBusiness] = useState<Business | null>(null);
  const [related, setRelated] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('kennewick')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error || !data) {
        setError('Unable to load this business listing.');
        setLoading(false);
        return;
      }
      const b = data as Business;
      setBusiness(b);

      const { data: relData } = await supabase
        .from('kennewick')
        .select('*')
        .eq('category', b.category)
        .neq('id', b.id)
        .order('sort_order', { ascending: true })
        .limit(3);
      setRelated((relData ?? []) as Business[]);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto animate-pulse space-y-4">
        <div className="h-8 bg-stone-200 rounded w-2/3" />
        <div className="h-4 bg-stone-200 rounded w-full" />
        <div className="h-4 bg-stone-200 rounded w-3/4" />
        <div className="h-40 bg-stone-200 rounded-2xl" />
      </div>
    );
  }

  if (error || !business) {
    return (
      <div className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <p className="text-red-700">{error ?? 'Business not found.'}</p>
        <a href="/directory" className="mt-4 inline-block text-sky-700 font-semibold underline">
          Back to directory
        </a>
      </div>
    );
  }

  const initials = business.name
    .split(' ')
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="max-w-3xl mx-auto">
      <nav className="text-xs text-stone-500 mt-6" aria-label="Breadcrumb">
        <a href="/" className="hover:text-sky-700">Home</a>
        <span className="mx-1">›</span>
        <a href="/directory" className="hover:text-sky-700">Directory</a>
        <span className="mx-1">›</span>
        <a href={`/directory/${business.category}`} className="hover:text-sky-700">
          {business.category_label}
        </a>
        <span className="mx-1">›</span>
        <span className="text-stone-700">{business.name}</span>
      </nav>

      <div className="mt-6 h-48 bg-gradient-to-br from-sky-100 to-stone-100 rounded-2xl overflow-hidden flex items-center justify-center">
        {business.image_url ? (
          <img src={business.image_url} alt={business.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl font-bold text-sky-700/30">{initials}</span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900">{business.name}</h1>
          {business.tagline && (
            <p className="mt-1 text-lg text-stone-600">{business.tagline}</p>
          )}
        </div>
        {business.rating > 0 && (
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
            <span className="text-amber-500 font-bold text-lg">
              {Number(business.rating).toFixed(1)}
            </span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i <= Math.round(business.rating) ? 'text-amber-500' : 'text-stone-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-stone-500">({business.review_count} reviews)</span>
          </div>
        )}
      </div>

      <div className="mt-6 text-stone-700 leading-relaxed">{business.description}</div>

      {business.features.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-stone-900">Services & features</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {business.features.map((f) => (
              <span
                key={f}
                className="text-sm bg-sky-50 text-sky-700 px-3 py-1 rounded-full font-medium"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-stone-900">Contact & details</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {business.phone && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="text-sky-700 font-semibold hover:underline">
                  {business.phone}
                </a>
              </dd>
            </div>
          )}
          {business.email && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${business.email}`} className="text-sky-700 font-semibold hover:underline break-all">
                  {business.email}
                </a>
              </dd>
            </div>
          )}
          {business.address && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Address</dt>
              <dd className="mt-1 text-stone-700">{business.address}</dd>
            </div>
          )}
          {business.hours && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Hours</dt>
              <dd className="mt-1 text-stone-700">{business.hours}</dd>
            </div>
          )}
          {business.service_area && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Service area</dt>
              <dd className="mt-1 text-stone-700">{business.service_area}</dd>
            </div>
          )}
          {business.website && (
            <div>
              <dt className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Website</dt>
              <dd className="mt-1">
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-semibold hover:underline break-all"
                >
                  Visit website
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-stone-900">
            Other {business.category_label.toLowerCase()} businesses in {city}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <a
                key={r.id}
                href={`/directory/${r.slug}`}
                className="group bg-white border border-stone-200 rounded-xl p-4 hover:border-sky-400 transition-colors"
              >
                <h3 className="font-semibold text-stone-900 group-hover:text-sky-700 transition-colors">
                  {r.name}
                </h3>
                {r.tagline && <p className="mt-1 text-xs text-stone-600">{r.tagline}</p>}
                {r.rating > 0 && (
                  <p className="mt-2 text-xs text-amber-600 font-semibold">
                    {Number(r.rating).toFixed(1)} stars ({r.review_count})
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
