import type { ServiceEntry } from '../../types';
import { batch01 } from './batch-01';
import { batch02 } from './batch-02';
import { batch03 } from './batch-03';
import { batch04 } from './batch-04';
import { batch05 } from './batch-05';
import { batch06 } from './batch-06';
import { batch07 } from './batch-07';
import { batch08 } from './batch-08';

export const services: ServiceEntry[] = [
  ...batch01,
  ...batch02,
  ...batch03,
  ...batch04,
  ...batch05,
  ...batch06,
  ...batch07,
  ...batch08,
];

export function byCategory(): Map<string, ServiceEntry[]> {
  const map = new Map<string, ServiceEntry[]>();
  for (const s of services) {
    const list = map.get(s.category) ?? [];
    list.push(s);
    map.set(s.category, list);
  }
  return map;
}

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}
