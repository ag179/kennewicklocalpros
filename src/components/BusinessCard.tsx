import { useState } from 'react';
import type { Business } from '../lib/supabase-client';

interface Props {
  business: Business;
  domain: string;
}

export default function BusinessCard({ business, domain }: Props) {
  const [imgError, setImgError] = useState(false);
  const showImage = business.image_url && !imgError;
  const initials = business.name
    .split(' ')
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <a
      href={`/directory/${business.slug}`}
      className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-sky-400 hover:shadow-lg transition-all duration-200"
    >
      <div className="h-40 bg-gradient-to-br from-sky-100 to-stone-100 relative overflow-hidden">
        {showImage ? (
          <img
            src={business.image_url!}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-sky-700/30">{initials}</span>
          </div>
        )}
        {business.featured && (
          <span className="absolute top-3 right-3 bg-sky-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors">
            {business.name}
          </h3>
          {business.rating > 0 && (
            <div className="flex items-center gap-1 flex-none">
              <span className="text-amber-500 text-sm font-bold">
                {Number(business.rating).toFixed(1)}
              </span>
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-stone-400">({business.review_count})</span>
            </div>
          )}
        </div>
        {business.tagline && (
          <p className="mt-1 text-sm text-stone-600 leading-relaxed">{business.tagline}</p>
        )}
        {business.features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {business.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
          {business.hours && <span>{business.hours}</span>}
          {business.address && (
            <span className="truncate">
              {business.address.split(',').slice(0, 2).join(',')}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
