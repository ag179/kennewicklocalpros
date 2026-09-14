import { useEffect, useState } from 'react';
import { supabase, type Business } from '../lib/supabase';
import BusinessCard from './BusinessCard';

interface Props {
  category: string;
  categoryLabel: string;
  domain: string;
}

export default function DirectoryListing({ category, categoryLabel, domain }: Props) {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('kennewick')
        .select('*')
        .eq('category', category)
        .order('sort_order', { ascending: true });

      if (error) {
        setError('Unable to load businesses right now. Please try again later.');
        setLoading(false);
        return;
      }
      setBusinesses((data ?? []) as Business[]);
      setLoading(false);
    })();
  }, [category]);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden animate-pulse">
            <div className="h-40 bg-stone-200" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-stone-200 rounded w-3/4" />
              <div className="h-4 bg-stone-200 rounded w-full" />
              <div className="h-4 bg-stone-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="bg-stone-100 border border-stone-200 rounded-xl p-8 text-center">
        <p className="text-stone-600">
          No {categoryLabel.toLowerCase()} businesses have been listed yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {businesses.map((b) => (
        <BusinessCard key={b.id} business={b} domain={domain} />
      ))}
    </div>
  );
}
