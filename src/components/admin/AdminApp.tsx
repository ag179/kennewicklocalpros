import { useCallback, useEffect, useMemo, useState } from 'react';
import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';

interface Props {
  supabaseUrl: string;
  supabaseAnonKey: string;
  site: string;
  siteName: string;
  domain: string;
  serviceNames: Record<string, string>;
  /** When this admin page (and so the whole site) was last built/published. */
  buildTime: string;
}

interface Listing {
  id: string;
  service: string;
  slug: string;
  name: string;
  phone: string | null;
  website: string | null;
  address: string;
  street: string | null;
  city: string;
  postal_code: string | null;
  rating: number | string | null;
  reviews: number;
  hours: string | null;
  services: string[];
  sort_order: number;
  hidden: boolean;
  featured: boolean;
  updated_at: string;
}

type Toast = { kind: 'ok' | 'error'; text: string } | null;

const EDITABLE: { key: keyof Listing; label: string; hint?: string }[] = [
  { key: 'name', label: 'Business name' },
  { key: 'phone', label: 'Phone' },
  { key: 'website', label: 'Website', hint: 'Full address, starting with https://' },
  { key: 'address', label: 'Full address', hint: 'Shown on cards and profile, e.g. 123 Main St, Kennewick, WA 99336' },
  { key: 'street', label: 'Street' },
  { key: 'city', label: 'City' },
  { key: 'postal_code', label: 'ZIP code' },
  { key: 'hours', label: 'Hours summary', hint: 'Short line shown on cards, e.g. Mon–Fri 8am–5pm' },
];

function useSupabase(url: string, key: string) {
  return useMemo(() => createClient(url, key, { auth: { persistSession: true, detectSessionInUrl: true } }), [url, key]);
}

export default function AdminApp(props: Props) {
  const supabase = useSupabase(props.supabaseUrl, props.supabaseAnonKey);
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      return;
    }
    supabase.rpc('is_listings_admin').then(({ data, error }) => setIsAdmin(!error && data === true));
  }, [supabase, session]);

  if (!ready) return <Centered>Loading…</Centered>;
  if (!session) return <Login supabase={supabase} siteName={props.siteName} />;
  if (isAdmin === null) return <Centered>Checking access…</Centered>;
  if (!isAdmin)
    return (
      <Centered>
        <p className="font-semibold text-stone-900">This account doesn't have admin access.</p>
        <p className="mt-1 text-sm text-stone-600">Signed in as {session.user.email}.</p>
        <button className="mt-4 text-sm font-semibold text-sky-700 underline" onClick={() => supabase.auth.signOut()}>
          Sign out
        </button>
      </Centered>
    );
  return <Dashboard {...props} supabase={supabase} email={session.user.email ?? ''} />;
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-sm">{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- login */

function Login({ supabase, siteName }: { supabase: SupabaseClient; siteName: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<Toast>(null);

  const signInWithPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setMessage({ kind: 'error', text: error.message });
  };

  const sendLink = async () => {
    if (!email) return setMessage({ kind: 'error', text: 'Enter your email first.' });
    setBusy(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/admin` },
    });
    setBusy(false);
    setMessage(
      error
        ? { kind: 'error', text: error.message }
        : { kind: 'ok', text: 'Check your inbox for a sign-in link. Open it in this browser.' },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={signInWithPassword} className="bg-white border border-stone-200 rounded-2xl p-8 max-w-sm w-full shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{siteName}</p>
        <h1 className="mt-1 text-2xl font-extrabold text-stone-900">Admin sign in</h1>
        <label className="mt-6 block text-sm font-medium text-stone-700">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-sky-600 focus:outline-none"
          />
        </label>
        <label className="mt-4 block text-sm font-medium text-stone-700">
          Password
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-sky-600 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={busy || !password}
          className="mt-5 w-full bg-sky-700 hover:bg-sky-800 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg"
        >
          Sign in
        </button>
        <div className="my-4 flex items-center gap-3 text-xs text-stone-400">
          <span className="h-px flex-1 bg-stone-200" />
          or
          <span className="h-px flex-1 bg-stone-200" />
        </div>
        <button
          type="button"
          onClick={sendLink}
          disabled={busy}
          className="w-full border border-stone-300 hover:border-sky-600 font-semibold py-2.5 rounded-lg disabled:opacity-50"
        >
          Email me a sign-in link
        </button>
        {message && (
          <p className={`mt-4 text-sm ${message.kind === 'error' ? 'text-red-700' : 'text-emerald-700'}`}>{message.text}</p>
        )}
      </form>
    </div>
  );
}

/* ------------------------------------------------------------ dashboard */

function Dashboard(props: Props & { supabase: SupabaseClient; email: string }) {
  const { supabase, site, serviceNames, domain, buildTime } = props;
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<string>('');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState<Toast>(null);
  const [editing, setEditing] = useState<Listing | null>(null);
  const [deleting, setDeleting] = useState<Listing | null>(null);
  const [deletedCount, setDeletedCount] = useState(0);
  const [showAccount, setShowAccount] = useState(false);

  const flash = useCallback((t: Toast) => {
    setToast(t);
    if (t) window.setTimeout(() => setToast((cur) => (cur === t ? null : cur)), 3500);
  }, []);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from('listings')
      .select('id,service,slug,name,phone,website,address,street,city,postal_code,rating,reviews,hours,services,sort_order,hidden,featured,updated_at')
      .eq('site', site)
      .order('service')
      .order('sort_order');
    if (error) flash({ kind: 'error', text: `Could not load listings: ${error.message}` });
    else {
      setListings(data as Listing[]);
      setTab((t) => t || (data as Listing[])[0]?.service || '');
    }
    setLoading(false);
  }, [supabase, site, flash]);

  useEffect(() => {
    load();
  }, [load]);

  const servicesInData = useMemo(() => [...new Set(listings.map((l) => l.service))], [listings]);
  const inTab = useMemo(
    () => listings.filter((l) => l.service === tab).sort((a, b) => a.sort_order - b.sort_order),
    [listings, tab],
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? inTab.filter((l) => `${l.name} ${l.city} ${l.address}`.toLowerCase().includes(q)) : inTab;
  }, [inTab, query]);

  const builtAt = useMemo(() => new Date(buildTime).getTime(), [buildTime]);
  const isUnpublished = (l: Listing) => new Date(l.updated_at).getTime() > builtAt;
  const unpublished = listings.filter(isUnpublished).length + deletedCount;

  const replace = (row: Listing) => setListings((ls) => ls.map((l) => (l.id === row.id ? row : l)));

  const update = async (l: Listing, changes: Partial<Listing>, okText: string) => {
    const { data, error } = await supabase.from('listings').update(changes).eq('id', l.id).select().single();
    if (error) return flash({ kind: 'error', text: `Save failed: ${error.message}` }), false;
    replace(data as Listing);
    flash({ kind: 'ok', text: okText });
    return true;
  };

  const move = async (l: Listing, dir: -1 | 1) => {
    const i = inTab.findIndex((x) => x.id === l.id);
    const other = inTab[i + dir];
    if (!other) return;
    const a = await supabase.from('listings').update({ sort_order: other.sort_order }).eq('id', l.id).select().single();
    const b = await supabase.from('listings').update({ sort_order: l.sort_order }).eq('id', other.id).select().single();
    if (a.error || b.error) {
      flash({ kind: 'error', text: `Reorder failed: ${(a.error || b.error)!.message}` });
      return load();
    }
    replace(a.data as Listing);
    replace(b.data as Listing);
  };

  const remove = async (l: Listing) => {
    const { error } = await supabase.from('listings').delete().eq('id', l.id);
    setDeleting(null);
    if (error) return flash({ kind: 'error', text: `Delete failed: ${error.message}` });
    setListings((ls) => ls.filter((x) => x.id !== l.id));
    setDeletedCount((n) => n + 1);
    flash({ kind: 'ok', text: `Deleted ${l.name}` });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <header className="flex flex-wrap items-center justify-between gap-3 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{props.siteName}</p>
          <h1 className="text-2xl font-extrabold text-stone-900">Listings admin</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href="/" target="_blank" rel="noopener" className="font-semibold text-sky-700 hover:underline">
            View site
          </a>
          <button onClick={() => setShowAccount((v) => !v)} className="font-semibold text-stone-600 hover:text-stone-900">
            {props.email}
          </button>
          <button onClick={() => supabase.auth.signOut()} className="font-semibold text-stone-600 hover:text-stone-900">
            Sign out
          </button>
        </div>
      </header>

      {showAccount && <AccountPanel supabase={supabase} onDone={flash} />}

      <div
        className={`rounded-xl px-4 py-3 text-sm border ${
          unpublished > 0 ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-white border-stone-200 text-stone-600'
        }`}
      >
        {unpublished > 0 ? (
          <>
            <strong>
              {unpublished} change{unpublished === 1 ? '' : 's'} not live yet.
            </strong>{' '}
            Click <strong>Publish</strong> in Bolt to rebuild the site with your changes.
          </>
        ) : (
          <>The live site matches these listings. Changes you make here go live the next time you click Publish in Bolt.</>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {servicesInData.map((s) => (
          <button
            key={s}
            onClick={() => setTab(s)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              tab === s ? 'bg-sky-700 border-sky-700 text-white' : 'bg-white border-stone-300 text-stone-700 hover:border-sky-600'
            }`}
          >
            {serviceNames[s] ?? s} <span className="opacity-70">({listings.filter((l) => l.service === s).length})</span>
          </button>
        ))}
        <input
          type="search"
          placeholder="Search name or city…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-auto w-full sm:w-64 rounded-full border border-stone-300 px-4 py-2 text-sm focus:border-sky-600 focus:outline-none"
        />
      </div>

      <p className="mt-3 text-xs text-stone-500">
        Order here is the ranking order on the site. Featured listings are always shown first on the live page, with a highlighted
        card.
      </p>

      {loading ? (
        <p className="mt-8 text-stone-500">Loading listings…</p>
      ) : (
        <ol className="mt-3 space-y-2">
          {visible.map((l) => {
            const pos = inTab.findIndex((x) => x.id === l.id);
            return (
              <li
                key={l.id}
                className={`rounded-xl border p-4 flex flex-wrap items-center gap-x-4 gap-y-3 ${
                  l.featured ? 'bg-amber-50 border-amber-400' : 'bg-white border-stone-200'
                } ${l.hidden ? 'opacity-60' : ''}`}
              >
                <span className="w-7 text-center text-sm font-bold text-stone-400">{pos + 1}</span>
                <div className="flex flex-col">
                  <IconButton title="Move up" disabled={pos === 0 || !!query} onClick={() => move(l, -1)}>
                    ▲
                  </IconButton>
                  <IconButton title="Move down" disabled={pos === inTab.length - 1 || !!query} onClick={() => move(l, 1)}>
                    ▼
                  </IconButton>
                </div>
                <div className="min-w-0 flex-1 basis-60">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`/${l.service}/${l.slug}`}
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-stone-900 hover:text-sky-700"
                    >
                      {l.name}
                    </a>
                    {l.featured && <Badge className="bg-amber-400 text-amber-950">★ Featured</Badge>}
                    {l.hidden && <Badge className="bg-stone-200 text-stone-700">Hidden</Badge>}
                    {isUnpublished(l) && <Badge className="bg-sky-100 text-sky-800">Not published</Badge>}
                  </div>
                  <p className="mt-0.5 text-sm text-stone-500 truncate">
                    {l.rating ? `★ ${Number(l.rating).toFixed(1)} (${l.reviews.toLocaleString('en-US')}) · ` : ''}
                    {l.city}
                    {l.phone ? ` · ${l.phone}` : ''}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <ActionButton
                    active={l.featured}
                    activeClass="bg-amber-400 border-amber-400 text-amber-950"
                    onClick={() =>
                      update(l, { featured: !l.featured }, l.featured ? `${l.name} is no longer featured` : `${l.name} is now featured`)
                    }
                  >
                    {l.featured ? '★ Featured' : '☆ Feature'}
                  </ActionButton>
                  <ActionButton
                    active={l.hidden}
                    activeClass="bg-stone-700 border-stone-700 text-white"
                    onClick={() => update(l, { hidden: !l.hidden }, l.hidden ? `${l.name} will be shown` : `${l.name} will be hidden`)}
                  >
                    {l.hidden ? 'Show' : 'Hide'}
                  </ActionButton>
                  <ActionButton onClick={() => setEditing(l)}>Edit</ActionButton>
                  <ActionButton onClick={() => setDeleting(l)} className="text-red-700 hover:border-red-500">
                    Delete
                  </ActionButton>
                </div>
              </li>
            );
          })}
          {visible.length === 0 && <p className="mt-6 text-stone-500">No listings match.</p>}
        </ol>
      )}

      {editing && (
        <EditDialog
          listing={editing}
          domain={domain}
          onCancel={() => setEditing(null)}
          onSave={async (changes) => {
            if (await update(editing, changes, `Saved ${changes.name ?? editing.name}`)) setEditing(null);
          }}
        />
      )}

      {deleting && (
        <Modal onClose={() => setDeleting(null)}>
          <h2 className="text-lg font-bold text-stone-900">Delete {deleting.name}?</h2>
          <p className="mt-2 text-sm text-stone-600">
            This removes the listing and its profile page permanently after the next publish. To take it off the site but keep it,
            use <strong>Hide</strong> instead.
          </p>
          <div className="mt-6 flex justify-end gap-2">
            <ActionButton onClick={() => setDeleting(null)}>Cancel</ActionButton>
            <button
              onClick={() => remove(deleting)}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold"
            >
              Delete permanently
            </button>
          </div>
        </Modal>
      )}

      {toast && (
        <div
          role="status"
          className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium ${
            toast.kind === 'error' ? 'bg-red-600 text-white' : 'bg-stone-900 text-white'
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------- dialogs */

function EditDialog({
  listing,
  domain,
  onCancel,
  onSave,
}: {
  listing: Listing;
  domain: string;
  onCancel: () => void;
  onSave: (changes: Partial<Listing>) => void;
}) {
  const [form, setForm] = useState<Record<string, string>>(() =>
    Object.fromEntries([
      ...EDITABLE.map(({ key }) => [key, (listing[key] as string | null) ?? '']),
      ['services', listing.services.join(', ')],
    ]),
  );
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.address.trim() || !form.city.trim()) return;
    setSaving(true);
    const changes: Partial<Listing> = {};
    for (const { key } of EDITABLE) {
      const v = form[key].trim();
      (changes as Record<string, unknown>)[key] = v === '' && !['name', 'address', 'city'].includes(key) ? null : v;
    }
    changes.services = form.services
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    await onSave(changes);
    setSaving(false);
  };

  return (
    <Modal onClose={onCancel} wide>
      <form onSubmit={submit}>
        <h2 className="text-lg font-bold text-stone-900">Edit listing</h2>
        <p className="mt-1 text-xs text-stone-500">
          Profile address: {domain}/{listing.service}/{listing.slug} (doesn't change when you rename)
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {EDITABLE.map(({ key, label, hint }) => (
            <label key={key} className={`block text-sm font-medium text-stone-700 ${key === 'address' || key === 'name' ? 'sm:col-span-2' : ''}`}>
              {label}
              <input
                value={form[key]}
                required={['name', 'address', 'city'].includes(key)}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 font-normal focus:border-sky-600 focus:outline-none"
              />
              {hint && <span className="mt-1 block text-xs font-normal text-stone-500">{hint}</span>}
            </label>
          ))}
          <label className="block text-sm font-medium text-stone-700 sm:col-span-2">
            Services
            <input
              value={form.services}
              onChange={(e) => setForm({ ...form, services: e.target.value })}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 font-normal focus:border-sky-600 focus:outline-none"
            />
            <span className="mt-1 block text-xs font-normal text-stone-500">Separate with commas, e.g. Pest control, Bird control</span>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <ActionButton onClick={onCancel}>Cancel</ActionButton>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 disabled:opacity-50 text-white text-sm font-semibold"
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function AccountPanel({ supabase, onDone }: { supabase: SupabaseClient; onDone: (t: Toast) => void }) {
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) onDone({ kind: 'error', text: error.message });
    else {
      setPw('');
      onDone({ kind: 'ok', text: 'Password saved. You can now sign in with email + password.' });
    }
  };
  return (
    <form onSubmit={save} className="mb-4 bg-white border border-stone-200 rounded-xl p-4 flex flex-wrap items-end gap-3">
      <label className="text-sm font-medium text-stone-700">
        Set a password (optional)
        <input
          type="password"
          minLength={8}
          required
          autoComplete="new-password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="mt-1 block w-64 rounded-lg border border-stone-300 px-3 py-2 font-normal focus:border-sky-600 focus:outline-none"
        />
      </label>
      <button disabled={busy} className="px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 disabled:opacity-50 text-white text-sm font-semibold">
        Save password
      </button>
      <span className="text-xs text-stone-500">At least 8 characters. Lets you sign in without an email link.</span>
    </form>
  );
}

/* ------------------------------------------------------------ primitives */

function Modal({ children, onClose, wide }: { children: React.ReactNode; onClose: () => void; wide?: boolean }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-20 bg-stone-900/40 flex items-start sm:items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl shadow-xl p-6 w-full ${wide ? 'max-w-2xl' : 'max-w-md'}`}
      >
        {children}
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${className}`}>{children}</span>;
}

function IconButton(props: { children: React.ReactNode; title: string; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      title={props.title}
      aria-label={props.title}
      disabled={props.disabled}
      onClick={props.onClick}
      className="text-[10px] leading-none px-1.5 py-1 text-stone-500 hover:text-sky-700 disabled:opacity-25 disabled:hover:text-stone-500"
    >
      {props.children}
    </button>
  );
}

function ActionButton(props: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  activeClass?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`px-3 py-1.5 rounded-lg border text-sm font-semibold ${
        props.active && props.activeClass ? props.activeClass : `bg-white border-stone-300 hover:border-sky-600 ${props.className ?? ''}`
      }`}
    >
      {props.children}
    </button>
  );
}
