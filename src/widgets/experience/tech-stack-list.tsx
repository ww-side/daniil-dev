'use client';

import { technologies } from '@/features/experience/lib';
import { TechCategory } from '@/features/experience/ui';

export const TechStackList = () => (
  <section>
    {technologies.map(({ title, stack }) => (
      <TechCategory key={title} title={title} stack={stack} />
    ))}
  </section>
);
