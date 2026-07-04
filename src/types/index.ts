export interface ServiceEntry {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  problems: { title: string; body: string }[];
  process: { step: string; detail: string }[];
  priceContext: string;
  faqs: { q: string; a: string }[];
  related: string[];
}
