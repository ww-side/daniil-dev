'use client';

import { TechCategory } from '@/features/experience/components';
import { technologies } from '@/features/experience/lib';

import { React } from '@/shared/ui/icons';

export function TechStackList() {
  return (
    <section>
      {technologies.map(({ title, stack }) => (
        <TechCategory key={title} title={title} stack={stack} />
      ))}
    </section>
  );
}
